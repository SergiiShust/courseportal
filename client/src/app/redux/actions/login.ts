import {Action} from '@ngrx/store';
import {User} from "../../common/entities/user";

export const LOGIN = '[Login] Login';
export const LOGOUT = '[Logout] Logout';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export type Actions
  = LoginAction
  | LogoutAction;
