import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  countries$ = this.apiService.getCollectionItems('countries');
  categories$ = this.apiService.getCollectionItems('categories');

  dialogForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    stars: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
  })

  constructor(
    public apiService: ApiService,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

	openSubsriptions() {
    this.apiService.getCollectionItems('country')
  }

  onFormSubmit(formValue) {
    console.log(1, formValue)
    this.dialogRef.close();
  }

}
