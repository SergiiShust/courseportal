import {Injectable} from '@angular/core';
import {User} from "../entities/user";

const USER_TOKEN = 'train-me-user-token';

interface UserToken {
  [key: string]: User;
}

@Injectable()
export class AuthorizationService {
  constructor() {
  }

  login(user: User) {
    let userToken: UserToken = {};
    user.token = Date.now();
    userToken[user.name] = user;
    localStorage.setItem(USER_TOKEN, JSON.stringify(userToken));
  }

  logout() {
    localStorage.removeItem(USER_TOKEN);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(USER_TOKEN);
  }

  getUserInfo():User {
    return JSON.parse(localStorage.getItem(USER_TOKEN));
  }
}
