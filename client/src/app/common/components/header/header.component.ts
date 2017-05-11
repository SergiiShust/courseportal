import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {ActivatedRoute} from "@angular/router";
import {BreadCrumbService} from "../../services/bread-crumb.service";

@Component({
  selector: 'trainme-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private breadCrumbService: BreadCrumbService,
              private ref: ChangeDetectorRef) {
  }

  isAuthenticated: boolean = false;
  breadCrumb: string = '';

  ngOnInit() {
    this.authorizationService.userInfo.subscribe(() => {
      this.isAuthenticated = this.authorizationService.isAuthenticated();
      this.ref.markForCheck();
    });

    this.isAuthenticated = this.authorizationService.isAuthenticated();

    this.breadCrumbService.newBreadCrumb.subscribe((breadcrumb) => {
      this.breadCrumb = breadcrumb;
    });
  }

}
