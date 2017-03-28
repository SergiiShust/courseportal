import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'trainme-login-menu',
  templateUrl: 'login-menu.component.html',
  styleUrls: ['login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authorizationService.logout();
  }

}
