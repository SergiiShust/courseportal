import * as fromLogin from './login';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';



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

