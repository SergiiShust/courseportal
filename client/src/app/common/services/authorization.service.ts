import {Injectable, OnInit} from '@angular/core';
import {User} from "../entities/user";
import {Observable, Subject} from "rxjs";
import {OverlayService} from "../components/overlay/overlay-service/overlay-service.service";
import {Http} from "@angular/http";
import {AuthorizedHttpService} from "./authorize-http.service";

@Injectable()
export class AuthorizationService implements OnInit {
  constructor(private http: AuthorizedHttpService) {
  }

  ngOnInit(): void {
  }

  login(user: User): Observable<User> {
    return this.http
      .post('/login', {email: user.email, password: user.password})
      .map(responce => new User(user.email, user.password));
  }

  logout(): Observable<User> {
    return this.http
      .get('/logout')
      .map(responce => responce.json());
  }
}
