import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/core/modelos/Character';

type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters: Character[] = [];
  public modalVisibleDetalle = false;

  info: RequestInfo = {
    next: null
  }
  public numeroPagina = 1;
  public name: string;
  private esconderAltoScroll = 200;
  private mostrarAltoScroll = 500;

  constructor(private readonly characterService: CharacterService) { }

  ngOnInit(): void {
    this.buscarPersonajes();
  }

  buscarPersonajes(): void {
    this.characterService.buscarPersonajes(this.name, this.numeroPagina)
      .pipe(
        take(1))
      .subscribe((res: any) => {
        const { info, results } = res;
        this.characters = [...this.characters, ...results];
        this.info = info;
      })
  }

  public detallePersonaje(character) {
    console.log('Character -> ', character);
    this.modalVisibleDetalle = true;
  }

  public cerrarModal() {
    this.modalVisibleDetalle = false;
  }
}
