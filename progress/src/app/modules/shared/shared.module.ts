import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class SharedModule {

}