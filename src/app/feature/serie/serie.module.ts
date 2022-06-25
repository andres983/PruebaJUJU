import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie-routing.module';


import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { HomeSerieComponent } from './home-serie/home-serie.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeSerieComponent,
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [
    HomeSerieComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SerieModule { }
