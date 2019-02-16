import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  introText = 'Welcome to Framework Day 2019';
  specialOfferTitle = 'Find a destination of your life:';
  destinations$ = this.apiService.getCollectionItems('destinations');

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }
  
}
