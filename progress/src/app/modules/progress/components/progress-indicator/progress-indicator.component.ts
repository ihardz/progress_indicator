import { ProcessProgress } from './../../models/process-progress.interface';
import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressSignalrService } from '../../progress-signalr.service';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
  providers: [
    ProgressSignalrService
  ]
})
export class ProgressIndicator {
  @Input() progress: ProcessProgress;
  
  private get _value(): number {
    return (this.progress.currentStep*100/this.progress.totalSteps);
  }
  get width(): string {
    return this._value + '%';
  }
  get value(): number {
    return this._value;
  }

  @HostBinding() get id(): string {
    return this.progress.processId;
  }
}