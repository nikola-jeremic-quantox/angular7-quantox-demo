import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'users',     component: UsersComponent     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
