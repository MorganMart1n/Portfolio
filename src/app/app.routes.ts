import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },  // Single page - no routing needed
  { path: '**', redirectTo: '' } // Redirect all paths to home
];