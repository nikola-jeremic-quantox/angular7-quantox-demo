import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  chosenId: any;
  destinations: any;

  activatedId$ = this.sharedService.activatedId;

  constructor(
    private sharedService: SharedService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.openSubsriptions();
  }

  // ngOnDestroy() {
  //   this.closeSubscriptions();
  // }

  openSubsriptions() {
    this.activatedId$.subscribe(
      res => {
        this.chosenId = res;      
        this.apiService.getCollectionItems(this.chosenId).subscribe(
          res => {
            this.destinations = res;
          }
        )
      }
    );
  }

  closeSubscriptions() {
    this.activatedId$.unsubscribe();
  }

}
