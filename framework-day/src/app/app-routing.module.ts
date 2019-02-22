import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: 'home',             component: HomepageComponent      },
  { path: 'destinations',     loadChildren: './modules/destinations/destinations.module#DestinationsModule' },
  
  { path: '',  pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
