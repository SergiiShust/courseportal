import * as login from '../actions/login'

export interface State {
  isAuthenticated: boolean;
}
;

export const initialState: State = {
  isAuthenticated: false
};

export function reducer(state = initialState, action: login.Actions): State {
  switch (action.type) {
    case login.LOGOUT:
    case login.LOGIN: {
      return {isAuthenticated: action.payload};
    }

    default: {
      return state;
    }
  }
}

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
