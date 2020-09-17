import { StoreComponent } from './pages/store/store/store.component';
import { CartComponent } from './pages/store/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProcessBuilder, ProgressIndicator } from './components';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ProcessComponent } from './pages';
import { MatFormFieldModule } from '@angular/material/form-field';

const ROUTES: Routes = [
  { 
    path: '', 
    component: ProcessComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: CartComponent
  }
];

@NgModule({
  imports: [
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProgressIndicator,
    ProcessBuilder,
    ProcessComponent,

    StoreComponent,
    CartComponent
  ],
  exports: [
    RouterModule
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