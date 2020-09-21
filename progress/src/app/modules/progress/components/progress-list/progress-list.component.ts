import { ProcessProgress } from './../../models/process-progress.interface';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressSignalrService } from '../../progress-signalr.service';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.scss']
})
export class ProgressListComponent implements OnInit, OnDestroy {

  private _subs: Subscription[] = [];
  progresses: ProcessProgress[] = [];
  constructor(
    private progressSignalrService: ProgressSignalrService,
    private cdr: ChangeDetectorRef
  ) {
    
  }

  ngOnInit(): void {
    this._subs.push(
      this.progressSignalrService.progressPing
        .subscribe(this.onProgressPing.bind(this))
    );    
  }

  ngOnDestroy(): void {
    this._subs.forEach(x=>x.unsubscribe());
  }

  private onProgressPing(progress: ProcessProgress){
    let progressId = progress.processId;
    let progr = this.progresses.find(p => p.processId === progressId);
    if(progr){
      this.progresses[this.progresses.indexOf(progr)] = progress;      
    }else{
      this.progresses.push(progress);
    }
    this.cdr.detectChanges();
    if(progress.totalSteps === progress.currentStep){
      this.disposeProcessWithDelay(progressId);
    }
  }

  private disposeProcessWithDelay(progressId: string) {
    setTimeout(()=>{
      let progress = this.progresses.find(x=>x.processId === progressId)
      this.progresses.splice(this.progresses.indexOf(progress),1);
      this.cdr.detectChanges();
    }, 3000);
  }
}
