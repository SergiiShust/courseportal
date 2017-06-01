import * as login from '../actions/login'
import {User} from "../../common/entities/user";

export interface State {
  user: User
}

export const initialState: State = {
  user: null
};

const USER_TOKEN = 'auth_token';

export function reducer(state = initialState, action: login.Actions): State {
  switch (action.type) {
    case login.LOGOUT: {
      localStorage.removeItem(USER_TOKEN);
      return initialState;
    }
    case login.LOGIN: {
      localStorage.setItem(USER_TOKEN, 'askdjasd-dsfsdfdsf-dsfsdfsdf-sdfsdfsdf')
      return {user: action.payload};
    }
    default: {
      return state;
    }
  }
}

export const getIsAuthenticated = (state: State) => !!state.user;
export const getUser = (state: State) => state.user;
