import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged = false;

  constructor( 
    private router: Router, 
    private sharedService: SharedService
    ) {}
  
  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.isLogged = !!localStorage.getItem('token');
    this.sharedService.isLogged.next(this.isLogged);
  }

  onLogin() {
    localStorage.setItem('token', 'angularDemo');
    this.checkLoginStatus();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.checkLoginStatus();
  }

  onNavigate(page) {
    this.router.navigateByUrl( page );
  }

}
