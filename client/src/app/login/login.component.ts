import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {Router} from "@angular/router";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'trainme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private overlayService: OverlayService,
              private formBuilder: FormBuilder,
              private router: Router) {
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
        this.overlayService.hide()
      })
      .subscribe(() => {
        this.router.navigate(['/home']);
      });

  }

}
