import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'trainme-login-menu',
  templateUrl: 'login-menu.component.html',
  styleUrls: ['login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.authorizationService.userInfo.subscribe(() => {
      this.isAuthenticated = this.authorizationService.isAuthenticated();
    });

    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }

  logout() {
    this.authorizationService.logout();
  }

}
