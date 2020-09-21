import { AppSettingsService } from './modules/core/services/app-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'progress';
  initialized = false;
  settingsLoaded = false;

  /**
   *
   */
  constructor(
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.appSettingsService.init().subscribe(x => {
      this.initialized = x;
      this.settingsLoaded = true;
    });
  }
}
