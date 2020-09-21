import { ProgressSignalrService } from './progress-signalr.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProcessBuilder, ProgressIndicator } from './components';
import { ProcessComponent } from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressListComponent } from './components/progress-list/progress-list.component';

const ROUTES: Routes = [
  { 
    path: '', 
    component: ProcessComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProgressIndicator,
    ProcessBuilder,
    ProcessComponent,
    ProgressListComponent,
    ProgressIndicator
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProgressSignalrService
  ]  
})
export class ProgressModule {
}