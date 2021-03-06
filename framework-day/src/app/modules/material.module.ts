import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatGridListModule,
  MatSortModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTabsModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatGridListModule,
  MatSortModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatDividerModule,
  MatCheckboxModule,
  MatExpansionModule
];

@NgModule({
  imports: [ ...materialModules ],
  exports: [ ...materialModules ]
})

export class MaterialModule { }
