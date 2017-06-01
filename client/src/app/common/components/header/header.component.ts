import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {ActivatedRoute} from "@angular/router";
import {BreadCrumbService} from "../../services/bread-crumb.service";
import * as fromRoot from "../../../redux/reducers" ;
import * as login from "../../../redux/actions/login" ;
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'trainme-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breadCrumbService: BreadCrumbService,
              private store: Store<fromRoot.State>) {
    this.isAuthenticated$ = store.select(fromRoot.getLoginIsAuthenticated);
  }

  isAuthenticated$: Observable<boolean>;
  breadCrumb: string = '';

  ngOnInit() {
    this.breadCrumbService.newBreadCrumb.subscribe((breadcrumb) => {
      this.breadCrumb = breadcrumb;
    });
  }

}
