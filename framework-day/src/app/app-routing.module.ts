import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationsComponent } from './components/destinations/destinations.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  { path: 'home',          component: HomepageComponent      },
  { path: 'countries',     component: CountriesComponent     },
  { path: 'destinations',  component: DestinationsComponent  },
  
  { path: '',  pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
