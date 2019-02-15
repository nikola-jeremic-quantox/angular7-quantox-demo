import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Framework Battle 2019';

  constructor( private router: Router) {}

  goToCompanyList() {
    this.router.navigateByUrl('/companies');
  }

  goToUserList() {
    this.router.navigateByUrl('/users');
  }

}

