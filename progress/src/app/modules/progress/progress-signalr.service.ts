import { AppSettingsService } from '../core/services/app-settings.service';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ProcessProgress } from './models/process-progress.interface';
import { ProgressHubMethod } from './progress-hub-method.enum';
import { Subject } from 'rxjs';

@Injectable()
export class ProgressSignalrService {

  connection: HubConnection;
  progressPing = new Subject<ProcessProgress>();
  
  constructor(
    private appSettingsService: AppSettingsService
  ) {
    this.connection = new HubConnectionBuilder()
      .withUrl(appSettingsService.config.server + '/progress')
      .configureLogging(LogLevel.Debug)
      .build();
    this.connection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
    this.startWatching();
    this.connection.on
  }

  startWatching() {
    this.connection.on(ProgressHubMethod.PING, this.handlePing.bind(this))
  }

  private handlePing(progress: ProcessProgress): void {
    this.progressPing.next(progress);
  }

}
