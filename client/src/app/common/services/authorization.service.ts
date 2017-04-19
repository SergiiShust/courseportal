import {Injectable, OnInit} from '@angular/core';
import {User} from "../entities/user";
import {Observable, Subject} from "rxjs";
import {OverlayService} from "../components/overlay/overlay-service/overlay-service.service";
import {Http} from "@angular/http";

const USER_TOKEN = 'train-me-user-token';

interface UserToken {
  [key: string]: User;
}

@Injectable()
export class AuthorizationService implements OnInit {

  userInfo: Subject<User> = new Subject();
  currentUser: User = null;

  constructor(private http: Http) {
  }

  ngOnInit(): void {
  }

  login(user: User): Observable<User> {
    this.userInfo.next();
    return this.http
      .post('/login', {email: user.email, password: user.password})
      .map(responce => new User(user.email, user.password))
      .do(res => this.currentUser = res);
  }

  logout(): Observable<User> {

    this.userInfo.next();
    return this.http
      .get('/logout')
      .map(responce => responce.json())
      .do(res => this.currentUser = null);
  }

  isAuthenticated(): boolean {
    return this.currentUser != null;
  }

  getUserInfo(): User {
    return this.currentUser;
  }
}
