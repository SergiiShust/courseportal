import {Action} from '@ngrx/store';
import {Course} from "../../common/entities/course";

export const LOAD_COMPLETED = '[Courses] Load Completed';

export class LoadCompletedAction implements Action {
  readonly type = LOAD_COMPLETED;

  constructor(public payload: Array<Course>) {
  }
}

export type Actions
  = LoadCompletedAction;
