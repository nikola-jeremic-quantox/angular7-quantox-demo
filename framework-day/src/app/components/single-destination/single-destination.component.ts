import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-destination',
  templateUrl: './single-destination.component.html',
  styleUrls: ['./single-destination.component.scss']
})
export class SingleDestinationComponent implements OnInit {

  chosenId: string;
  destination$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private apiService: ApiService
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

}
