import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {OverlayService} from "../overlay/overlay-service/overlay-service.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as fromRoot from "../../../redux/reducers" ;
import * as login from "../../../redux/actions/login" ;

@Component({
  selector: 'trainme-login-menu',
  templateUrl: 'login-menu.component.html',
  styleUrls: ['login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private authorizationService: AuthorizationService,
              private overlayService: OverlayService,
              private store: Store<fromRoot.State>) {
    this.isAuthenticated$ = store.select(fromRoot.getLoginIsAuthenticated);
  }

  ngOnInit() {
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
        this.store.dispatch(new login.LogoutAction());
      });
  }

}
