import {Injectable, OnInit} from '@angular/core';
import {User} from "../entities/user";
import {Subject} from "rxjs";

const USER_TOKEN = 'train-me-user-token';

interface UserToken {
  [key: string]: User;
}

@Injectable()
export class AuthorizationService implements OnInit{

  userInfo: Subject<User> = new Subject();

  constructor() {
  }

  ngOnInit(): void {
  }

  login(user: User) {
    let userToken: UserToken = {};
    user.token = Date.now();
    userToken[user.name] = user;
    localStorage.setItem(USER_TOKEN, JSON.stringify(userToken));
    this.userInfo.next();
  }

  logout() {
    localStorage.removeItem(USER_TOKEN);
    this.userInfo.next();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(USER_TOKEN);
  }

  getUserInfo():User {
    return JSON.parse(localStorage.getItem(USER_TOKEN));
  }
}
