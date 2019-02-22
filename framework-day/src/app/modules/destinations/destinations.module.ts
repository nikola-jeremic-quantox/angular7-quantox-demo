import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { MaterialModule } from '../material.module';
import { AddDialogComponent } from 'src/app/_partials/dialogs/add-dialog/add-dialog.component';
import { TableFilterComponent } from 'src/app/_partials/table/table-filter/table-filter.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { SingleDestinationComponent } from './components/single-destination/single-destination.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    DestinationsComponent,
    SingleDestinationComponent,
    AddDialogComponent,
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DestinationsRoutingModule
  ],
  entryComponents: [
    AddDialogComponent
  ],
})

export class DestinationsModule {}