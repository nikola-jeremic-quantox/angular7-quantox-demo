import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core.module';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material.module';
import { FirebaseModule } from './modules/firebase.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { HeaderComponent } from './_partials/header/header.component';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    FirebaseModule,
    NgxFlagIconCssModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
