import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {Router} from "@angular/router";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";

@Component({
  selector: 'trainme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private overlayService: OverlayService,
              private router: Router) {
  }

  userName: string;

  ngOnInit() {
  }

  login() {
    this.authorizationService
      .login({name: this.userName})
      .do(() => {
        this.overlayService.show();
      })
      .delay(1000)
      .finally(() => {
        this.overlayService.hide()
      })
      .subscribe(() => {
        this.router.navigate(['/home']);
      });

  }

}
