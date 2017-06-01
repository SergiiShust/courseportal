import * as login from '../actions/courses'
import {Course} from "../../common/entities/course";

export interface State {
  courses: Array<Course>;
}

export const initialState: State = {
  courses: []
};


export function reducer(state = initialState, action: login.Actions): State {
  switch (action.type) {
    case login.LOAD_COMPLETED: {
      return {courses: action.payload};
    }
    default: {
      return state;
    }
  }
}

export const getCourses = (state: State) => state.courses;
