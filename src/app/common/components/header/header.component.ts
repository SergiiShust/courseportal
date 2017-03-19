import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'trainme-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) {
  }

  //isAuthenticated: boolean = false;

  ngOnInit() {
   // this.isAuthenticated = this.authorizationService.isAuthenticated()
  }

}
