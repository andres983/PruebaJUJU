import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './layoutComponent/nav-bar/nav-bar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CardUtilComponent } from './layoutComponent/card-util/card-util.component';

// Componentes
@NgModule({
  declarations: [
    NavBarComponent,
    CardUtilComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent,
    CardUtilComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
