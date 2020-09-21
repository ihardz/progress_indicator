import { ProcessService } from './../../process.service';
import { ProcessConfig } from './../../models/process-config.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-process',
  templateUrl: './process.component.html',
  styleUrls: [
    './process.component.scss'
  ]
})
export class ProcessComponent implements OnInit {

  constructor(
    private processService: ProcessService
  ) {
  }

  ngOnInit(): void {
  }

  handleProcessStart(config: ProcessConfig): void {
    this.processService.startProcess(config).subscribe(x=>{
      console.log("Process started");
    });
  }
}