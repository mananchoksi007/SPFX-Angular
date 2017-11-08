import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AngularAppComponent } from './AngularApp';

const routes: Routes = [
  { path: '', component: AngularAppComponent },
  { path: '**', redirectTo: '' }  
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });