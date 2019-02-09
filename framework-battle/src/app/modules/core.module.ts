import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const coreModules = [
  BrowserModule, 
  BrowserAnimationsModule
];

@NgModule({
  imports: [ ...coreModules ],
  exports: [ ...coreModules ]
})

export class CoreModule { }
