import {Injectable, OnInit} from '@angular/core';
import {User} from "../entities/user";
import {Observable, Subject} from "rxjs";
import {OverlayService} from "../components/overlay/overlay-service/overlay-service.service";
import {Http} from "@angular/http";
import {AuthorizedHttpService} from "./authorize-http.service";

const USER_TOKEN = 'auth_token';

interface UserToken {
  [key: string]: User;
}

@Injectable()
export class AuthorizationService implements OnInit {

  userInfo: Subject<User> = new Subject();
  currentUser: User = null;

  constructor(private http: AuthorizedHttpService) {
  }

  ngOnInit(): void {
  }

  login(user: User): Observable<User> {
    this.userInfo.next();
    return this.http
      .post('/login', {email: user.email, password: user.password})
      .map(responce => new User(user.email, user.password))
      .do(res => {
        this.currentUser = res;
        localStorage.setItem(USER_TOKEN, 'askdjasd-dsfsdfdsf-dsfsdfsdf-sdfsdfsdf')
      });
  }

  logout(): Observable<User> {

    this.userInfo.next();
    return this.http
      .get('/logout')
      .map(responce => responce.json())
      .do(res => {
        this.currentUser = null;
        localStorage.removeItem(USER_TOKEN);
      });
  }

  isAuthenticated(): boolean {
    return this.currentUser != null;
  }

  getUserInfo(): User {
    return this.currentUser;
  }
}
