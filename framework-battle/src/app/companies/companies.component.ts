import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/companies.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companyList$;

  constructor( 
    private companyService: CompanyService,
    private sharedService: SharedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.companyList$ = this.companyService.getCompanyList();
  }

  onCompanyChosen(companyId) {
    this.sharedService.activatedId.next( companyId );
    this.router.navigate(['users'])
  }

}
