import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

import { CharacterService } from '../../services/character.service';
import { Character } from 'src/app/core/modelos/Character';
import { SubSink } from 'subsink';

type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  public characters: Character[] = [];
  public characterModal: Character;
  public modalVisibleDetalle = false;
  public selectedData = '0'

  info: RequestInfo = {
    next: null
  }

  public mostrarBotonIrArrima = false;

  public numeroPagina = 1;
  public name: string;
  public gender: string;
  private esconderAltoScroll = 200;
  private mostrarAltoScroll = 600;

  private sub = new SubSink();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly characterService: CharacterService) { }


  ngOnInit(): void {
    this.obtenerPersonajes();

  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop > this.mostrarAltoScroll) {
      this.mostrarBotonIrArrima = true;
    } else if (this.mostrarBotonIrArrima && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.esconderAltoScroll) {
      this.mostrarBotonIrArrima = false;
    }
  }

  public onScrollDown(): void {
    if (this.info.next) {
      this.numeroPagina++;
      this.obtenerPersonajes();
    }
  }

  public onScrollTop(): void {
    this.document.body.scrollTop = 0; //Zafari
    this.document.documentElement.scrollTop = 0; //Otros navegadores
  }

  public obtenerPersonajes(): void {
    this.sub.add(this.characterService.buscarPersonajes(this.name, this.gender, this.numeroPagina)
      .pipe(
        take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        }
      }));
  }

  public obtenerDetallePersonaje(character: Character) {
    this.sub.add(this.characterService.obtenerDetallePersonaje(character.id)
      .pipe(
        take(1))
      .subscribe((res: any) => {

        this.characterModal = res;
      }));
    this.modalVisibleDetalle = true;
  }

  public buscarPersonaje(value: string) {

    if (value && value.length > 3) {
      this.characters = [];
      this.name = value;
      this.obtenerPersonajes();
    } else if (value.length === 0) {
      this.characters = [];
      this.name = '';
      this.numeroPagina = 1;
      this.obtenerPersonajes();
    }
  }

  public generoSeleccionado() {

    if (this.selectedData != '0') {
      this.characters = [];
      this.name = '';
      this.gender = this.selectedData;
      this.obtenerPersonajes();
    } else if (this.selectedData === '0') {
      this.characters = [];
      this.name = '';
      this.gender = '';
      this.numeroPagina = 1;
      this.obtenerPersonajes();
    }
  }

  public cerrarModal() {
    this.modalVisibleDetalle = false;
    this.characterModal = {};
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
