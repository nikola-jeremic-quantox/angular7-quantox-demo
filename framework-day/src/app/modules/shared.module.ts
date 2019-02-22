import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IterateNumberPipe } from '../_partials/pipes/iterate-number.pipe';


@NgModule({
  declarations: [IterateNumberPipe],
  imports: [ ReactiveFormsModule ],
  exports: [ ReactiveFormsModule, IterateNumberPipe ]
})

export class SharedModule { }
