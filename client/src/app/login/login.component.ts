import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {Router} from "@angular/router";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as fromRoot from "../redux/reducers" ;
import * as login from "../redux/actions/login" ;

@Component({
  selector: 'trainme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private overlayService: OverlayService,
              private formBuilder: FormBuilder,
              private router: Router,
              private store: Store<fromRoot.State>) {
  }


  formModel: FormGroup;

  ngOnInit() {
    this.formModel = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.authorizationService
      .login(this.formModel.value)
      .do(() => {
        this.overlayService.show();
      })
      .delay(1000)
      .finally(() => {
        this.overlayService.hide();
      })
      .subscribe((user) => {
        this.store.dispatch(new login.LoginAction(user));
        this.router.navigate(['/courses']);
      });

  }

}
