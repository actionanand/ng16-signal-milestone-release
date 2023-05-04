import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./default/default.component').then((m) => m.DefaultComponent),
    title: 'Default Change Detection',
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./signal/signal.component').then((m) => m.DefaultComponent),
    title: 'Signal Change Detection',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
