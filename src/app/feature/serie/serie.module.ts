import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSelectModule } from '@angular/material/select';

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
    InfiniteScrollModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,

  ],
  exports: [
    HomeSerieComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SerieModule { }
