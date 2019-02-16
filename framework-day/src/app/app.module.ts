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

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DestinationsComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    MaterialModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
