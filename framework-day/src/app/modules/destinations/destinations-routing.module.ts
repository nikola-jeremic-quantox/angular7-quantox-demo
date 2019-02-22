import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { SingleDestinationComponent } from './components/single-destination/single-destination.component';

const routes: Routes = [
  { path: '',     component: DestinationsComponent  },
  { path: ':id',  component: SingleDestinationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
