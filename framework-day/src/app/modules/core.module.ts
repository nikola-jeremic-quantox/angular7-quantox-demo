import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

const coreModules = [
  BrowserModule, 
  BrowserAnimationsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [ ...coreModules ],
  exports: [ ...coreModules ]
})

export class CoreModule { }
