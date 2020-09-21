import { ProcessConfig } from './../../models/process-config.interface';
import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-process-builder',
  templateUrl: './process-builder.component.html',
  styleUrls: [
    './process-builder.component.scss'
  ]
})
export class ProcessBuilder {
  processForm: FormGroup;
  @Output() processStart = new EventEmitter<ProcessConfig>();

  constructor(
    private fb: FormBuilder
  ) {
    this.processForm = this.fb.group({
      stepsCount: [1],
      stepDelay: [1]
    })
  }

  handleSubmit($event: any): void {
    this.processStart.emit(this.processForm.value);    
  }
}