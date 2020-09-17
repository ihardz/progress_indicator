import { Component } from '@angular/core';

@Component({
  selector: 'process-builder',
  templateUrl: './process-builder.component.html',
  styleUrls: [
    './process-builder.component.scss'
  ]
})
export class ProcessBuilder {
  stepsCount: number = 1;
}