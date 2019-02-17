import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countryList$;

  constructor( 
    private apiService: ApiService,
    private sharedService: SharedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.countryList$ = this.apiService.getCollectionItems('countries');
  }

  onCountryChosen(countryId) {
    // this.sharedService.activatedId.next( countryId );
    this.router.navigate(['users'])
  }

}
