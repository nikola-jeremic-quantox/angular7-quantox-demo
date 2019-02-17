import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core.module';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material.module';
import { FirebaseModule } from './modules/firebase.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { CountriesComponent } from './components/countries/countries.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HeaderComponent } from './_partials/header/header.component';
import { IterateNumberPipe } from './_partials/pipes/iterate-number.pipe';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';
import { SingleDestinationComponent } from './components/single-destination/single-destination.component';
import { TableFilterComponent } from './_partials/table/table-filter/table-filter.component';
import { AddDialogComponent } from './_partials/dialogs/add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DestinationsComponent,
    HomepageComponent,
    HeaderComponent,
    IterateNumberPipe,
    SingleDestinationComponent,
    TableFilterComponent,
    AddDialogComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    FirebaseModule,
    NgxFlagIconCssModule
  ],
  entryComponents: [
    AddDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
