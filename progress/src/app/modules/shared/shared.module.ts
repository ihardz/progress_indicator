import { StepperComponent } from './components/stepper/stepper.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatIconModule
  ],
  declarations: [
    StepperComponent
  ],
  exports: [
    StepperComponent
  ]
})
export class SharedModule {

}