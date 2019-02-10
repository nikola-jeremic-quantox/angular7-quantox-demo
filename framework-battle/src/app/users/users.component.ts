import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CompanyService } from '../services/companies.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  chosenId: any;
  users: any;

  activatedId$ = this.sharedService.activatedId;

  constructor(
    private sharedService: SharedService,
    private companyService: CompanyService
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
        this.companyService.getUserList(this.chosenId).subscribe(
          res => {
            this.users = res;
          }
        )
      }
    );
  }

  closeSubscriptions() {
    this.activatedId$.unsubscribe();
  }

}
