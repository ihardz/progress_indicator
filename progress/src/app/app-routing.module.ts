import { PATHS } from './constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: `./${PATHS.PROGRESS}`, pathMatch: 'full' },
  { path: PATHS.PROGRESS, loadChildren: () => import('./modules/progress/progress.module').then(x=>x.ProgressModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
