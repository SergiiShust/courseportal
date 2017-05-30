import {Action} from '@ngrx/store';

export const LOGIN = '[Login] Login';
export const LOGOUT = '[Logout] Logout';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: boolean) {
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor(public payload: boolean) {
  }
}

export type Actions
  = LoginAction
  | LogoutAction;
