import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectsService } from 'src/app/core/services/subjects.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public resize$: Observable<number>;
  public resize: number;
  public capitalBanco: Observable<number>;

  constructor(private readonly subjectsService: SubjectsService,
    private readonly rendere: Renderer2) {
    this.resize$ = this.subjectsService.getResolucionPantalla();
  }

  ngOnInit(): void {
    this.obtenerResize();
  }

  public obtenerResize(): number {
    this.resize$.pipe().subscribe((dataResize: number) => {
      this.resize = dataResize;
    });
    return this.resize;
  }


}
