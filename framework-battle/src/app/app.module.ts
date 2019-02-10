import { NgModule } from '@angular/core';

import { CoreModule } from './modules/core.module';
import { MaterialModule } from './modules/material.module';
import { FirebaseModule } from './modules/firebase.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    UsersComponent
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
