import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  conferenceTitle = 'Framework Day 2019';
  specialOfferTitle = 'Find a destination of your life:';
  destinations$ = this.apiService.getCollectionItems('destinations');

  logos = [
    { name: 'StarIt Centar', src: '/assets/images/logos/startit.png'},
    { name: 'Quantox',       src: '/assets/images/logos/quantox.jpg'},
    { name: 'Angular',       src: '/assets/images/logos/angular.svg'},
  ];

  constructor(
    private apiService: ApiService, 
    private sharedService: SharedService, 
    private router: Router
    ) {
  }

  ngOnInit() {
  }

  onDestinationChosen(id) {
    this.router.navigateByUrl('/destination/' + id);
  }

  onCategoryChosen(category) {
    this.sharedService.chosenCategory.next(category);
    this.router.navigateByUrl('/destinations');
  }
  
}
