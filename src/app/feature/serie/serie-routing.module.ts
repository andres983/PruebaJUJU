import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './container/characters/characters.component';
import { HomeSerieComponent } from './home-serie/home-serie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSerieComponent,
    children: [
      { path: '', component: CharactersComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
