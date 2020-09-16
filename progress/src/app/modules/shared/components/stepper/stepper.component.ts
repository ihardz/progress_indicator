import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();
}