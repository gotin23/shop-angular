import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FinalPageComponent } from './final-page/final-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'final', component: FinalPageComponent },
];
