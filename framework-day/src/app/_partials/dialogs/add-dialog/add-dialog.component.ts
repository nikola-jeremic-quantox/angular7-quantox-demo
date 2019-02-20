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
  submitted: boolean;
  id: string | number;
  actionButton: string;

  dialogForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    flag: new FormControl(''),
    funFacts: new FormControl(''),
    image: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    region: new FormControl('', [Validators.required, Validators.minLength(3)]),
    stars: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
  })  

  constructor(
    public apiService: ApiService,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.fillFormWithData();
  }

  fillFormWithData() {
    this.id = this.data.id;
    if (this.id) {
      this.apiService.getDestination(this.id).subscribe(
        res => {
          const formData = res;
          delete formData.id; 
          this.dialogForm.patchValue(formData);
          this.actionButton = 'Update document';
        }
      )
    } else {
      this.actionButton = 'Save';
    }
  }

  getDataForEditing() {
  }

  get form() { return this.dialogForm.controls; }

	openSubsriptions() {
    this.apiService.getCollectionItems('country')
  }

  onFormSubmit() {
    console.log(4343243243243, this.dialogForm)
    if(this.dialogForm.valid) {
      const formValue = Object.assign({id: this.id}, {doc: this.dialogForm.value});
      this.dialogRef.close(formValue);
    }
  }

}
