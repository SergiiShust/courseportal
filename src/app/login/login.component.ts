import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'trainme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
  }

  userName: string;

  ngOnInit() {
  }

  login() {
    this.authorizationService.login({name: this.userName});
    this.router.navigate(['/home']);
  }

}
