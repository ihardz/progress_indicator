import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProcessBuilder, ProgressIndicator } from './components';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ProcessComponent } from './pages';

const ROUTES: Routes = [
  { 
    path: '', 
    component: ProcessComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    MatProgressBarModule,
    MatIconModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProgressIndicator,
    ProcessBuilder,
    ProcessComponent
  ]
  // ,
  // exports: [
  //   ProgressIndicator,
  //   ProcessBuilder,
  //   ProcessComponent
  // ],
  // entryComponents:[
  //   ProcessComponent
  // ]
})
export class ProgressModule {
}