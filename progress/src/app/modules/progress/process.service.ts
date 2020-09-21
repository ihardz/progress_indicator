import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessConfig } from './models/process-config.interface';
import { AppSettingsService } from '../core/services/app-settings.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private server: string;
  private readonly RELATIVE_URL = '/api/process';
  private get serviceUrl(): string {
    return `${this.server}` + `${this.RELATIVE_URL}`;
  }
  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) { 
    this.server = this.appSettingsService.config.server;
  }
  
  startProcess(config: ProcessConfig): Observable<void> {
    return this.http.post<any>(this.serviceUrl, config);
  }
}
