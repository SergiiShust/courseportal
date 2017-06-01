import {Action} from '@ngrx/store';
import {Course} from "../../common/entities/course";

export const LOAD_COMPLETED = '[Courses] Load Completed';
export const DELETE_COURSE = '[Courses] Delete Course';
export const ADD_COURSE = '[Courses] Add Course';
export const EDIT_COURSE = '[Courses] Edit Course';

export class LoadCompletedAction implements Action {
  readonly type = LOAD_COMPLETED;

  constructor(public payload: Array<Course>) {
  }
}

export class DeletedAction implements Action {
  readonly type = DELETE_COURSE;

  constructor(public payload: Course) {
  }
}

export class AddAction implements Action {
  readonly type = ADD_COURSE;

  constructor(public payload: Course) {
  }
}

export class EditAction implements Action {
  readonly type = EDIT_COURSE;

  constructor(public payload: Course) {
  }
}

export type Actions
  = LoadCompletedAction | DeletedAction | AddAction | EditAction;
