import * as fromLogin from './login';
import * as fromCourses from './courses';
import { ActionReducer } from '@ngrx/store';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';



export interface State {
  login: fromLogin.State;
  courses: fromCourses.State;
}

const reducers = {
  login: fromLogin.reducer,
  courses: fromCourses.reducer
};


const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getLoginState = (state: State) => state.login;
export const getLoginIsAuthenticated = createSelector(getLoginState, fromLogin.getIsAuthenticated);
export const getUser = createSelector(getLoginState, fromLogin.getUser);

export const getCoursesState = (state: State) => state.courses;
export const getCourses = createSelector(getCoursesState, fromCourses.getCourses);

