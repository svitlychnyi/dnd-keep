import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { CharComponent } from './char/char.component';

export const ROUTES: Routes = [
  {path: '', component: CharComponent},
  {path: '**', component: CharComponent}
];
