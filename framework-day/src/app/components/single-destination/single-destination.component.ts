import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddDialogComponent } from 'src/app/_partials/dialogs/add-dialog/add-dialog.component';

@Component({
  selector: 'app-single-destination',
  templateUrl: './single-destination.component.html',
  styleUrls: ['./single-destination.component.scss']
})
export class SingleDestinationComponent implements OnInit {

  chosenId: string;
  destination$: Observable<any>;
  noImage = '/assets/images/destinations/no_image.jpg';
	dialogRef: MatDialogRef<any>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private apiService: ApiService,
		private matDialog: MatDialog,
    private router: Router,
    private sharedService: SharedService
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.chosenId = params['id'];
    });
  }

  ngOnInit() {
    this.getDestination(this.chosenId);
  }

  getDestination(id) {
    this.destination$ = this.apiService.getDestination(id);
  }

  onCategoryChosen(category) {
    this.sharedService.activeCategories.next([category]);
    this.router.navigateByUrl('/destinations');
  }

  onCountryChosen(country) {
    this.sharedService.activeCountries.next([country]);
    this.router.navigateByUrl('/destinations');
  }

  onEdit(id) {
    this.dialogRef = this.matDialog.open(AddDialogComponent, {
      width: '600px',
      height: '600px',
      data: { title: 'Update Desination', id }
		});
		this.subscribeToDialogClosed();
  }
  
	subscribeToDialogClosed() {
		
    this.dialogRef.afterClosed().subscribe(object => {
			const { id, doc } = object;
      this.apiService.updateDestination(doc, id);
    });
  }

}
