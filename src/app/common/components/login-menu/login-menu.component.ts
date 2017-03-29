import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {OverlayService} from "../overlay/overlay-service/overlay-service.service";

@Component({
  selector: 'trainme-login-menu',
  templateUrl: 'login-menu.component.html',
  styleUrls: ['login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private authorizationService: AuthorizationService,
              private overlayService: OverlayService) {
  }

  ngOnInit() {
    this.authorizationService.userInfo.subscribe(() => {
      this.isAuthenticated = this.authorizationService.isAuthenticated();
    });

    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }

  logout() {
    this.authorizationService.logout()
      .do(() => {
        this.overlayService.show();
      })
      .delay(1000)
      .finally(() => {
        this.overlayService.hide()
      })
      .subscribe(() => {

      });
  }

}
