import { Component } from '@angular/core';
import { SubjectsService } from './core/services/subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaJUJU';
  public resize: number;

  constructor(private readonly subjectsService: SubjectsService) {
    this.capturarResolucionPantalla();
  }

  public capturarResolucionPantalla() {
    this.resize = window.innerWidth;
    console.log(this.resize);
    this.subjectsService.setResolucionPantalla(this.resize);
  }

}
