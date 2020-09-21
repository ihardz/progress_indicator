import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components';
import { IconPlusComponent } from './components/icons';
import { IconDashComponent } from './components/icons/icon-dash.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterComponent,
    IconPlusComponent,
    IconDashComponent
  ],
  exports: [
    CounterComponent,
    IconPlusComponent,
    IconDashComponent
  ]
})
export class SharedModule {

}