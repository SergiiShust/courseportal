import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'trainme-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private ref: ChangeDetectorRef) {
  }

  isAuthenticated: boolean = false;

  ngOnInit() {
    this.authorizationService.userInfo.subscribe(()=>{
      this.isAuthenticated = this.authorizationService.isAuthenticated();
      this.ref.markForCheck();
    });

    this.isAuthenticated = this.authorizationService.isAuthenticated();
  }

}
