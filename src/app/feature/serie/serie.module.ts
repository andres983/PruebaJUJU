import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from './serie-routing.module';
import { HomeSerieComponent } from './home-serie/home-serie.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeSerieComponent,
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    SharedModule
  ],
  exports: [
    HomeSerieComponent,
  ]
})
export class SerieModule { }
