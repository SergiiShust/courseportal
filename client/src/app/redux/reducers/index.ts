import * as fromLogin from './login';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';



export interface State {
  login: fromLogin.State
}

const reducers = {
  login: fromLogin.reducer
};


const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getLoginState = (state: State) => state.login;
export const getLoginIsAuthenticated = createSelector(getLoginState, fromLogin.getIsAuthenticated);
export const getUser = createSelector(getLoginState, fromLogin.getUser);

