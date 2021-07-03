import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
expanded : boolean
  navbarWidth : any;
  isUserLoggedIN: boolean;
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
    this.expanded=true;
    this.navbarWidth ={'width': 'auto'}
    this.isUserLoggedIN= this.authService.isLoggedIn();
  }

  toggleNavbar(){
    if (!this.expanded) {
      this.expanded = true;
      this.navbarWidth ={'width': 'auto'}
    } else {
      this.expanded = false;
      this.navbarWidth ={'width': 0}
    }
  }
  logOut(){
    this.authService.logout();
    this.isUserLoggedIN=this.authService.isLoggedIn();
  }

}
