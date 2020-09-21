import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './../models/app-settings';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';

const APP_SETTINGS_JSON_URL = './assets/app-settings.json'
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  
  private _config : AppSettings;
  public get config() : AppSettings {
    return this._config;
  }
    
  
  constructor(
    private http: HttpClient
  ) {
  }

  init(): Observable<boolean> {
    return this.http.get<AppSettings>(APP_SETTINGS_JSON_URL).pipe(
      tap(x => this._config = x),
      map(x=>!!x),
      catchError(x=>of(false))
    );
  }
}
