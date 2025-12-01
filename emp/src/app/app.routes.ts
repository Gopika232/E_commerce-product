import { Routes } from '@angular/router';
import { Emplist } from './emplist/emplist';
import { Empform } from './empform/empform';

export const routes: Routes = [
  { path: 'list', component: Emplist },
  { path: 'add', component: Empform },
  { path: '', redirectTo: '/list', pathMatch: 'full' }];
