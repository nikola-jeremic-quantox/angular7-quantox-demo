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
import { SingleDestinationComponent } from './components/single-destination/single-destination.component'

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DestinationsComponent,
    HomepageComponent,
    HeaderComponent,
    IterateNumberPipe,
    SingleDestinationComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    FirebaseModule,
    NgxFlagIconCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
