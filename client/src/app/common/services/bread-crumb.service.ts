import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from "rxjs/Subject";

@Injectable()
export class BreadCrumbService {

  constructor() {
  }

  newBreadCrumb: Subject<string> = new Subject();
}
