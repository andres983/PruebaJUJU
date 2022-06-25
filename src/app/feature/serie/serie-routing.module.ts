import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './container/characters/characters.component';
import { EpisodesComponent } from './container/episodes/episodes.component';
import { HomeSerieComponent } from './home-serie/home-serie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSerieComponent,
    children: [
      { path: '', component: CharactersComponent },
      { path: 'episodes', component: EpisodesComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
