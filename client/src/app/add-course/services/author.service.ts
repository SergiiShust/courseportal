import { Injectable } from '@angular/core';
import {AuthorizedHttpService} from "../../common/services/authorize-http.service";
import {Observable} from "rxjs/Observable";
import {Author} from "../../common/entities/author";

@Injectable()
export class AuthorService {

  constructor(private http: AuthorizedHttpService) {
  }

  getAll(): Observable<Author[]> {
    return this.http.get('/author')
      .map(responce => responce.json());
  }
}
