import * as login from '../actions/courses';
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
    case login.ADD_COURSE: {
      return Object.assign({}, state, {
        courses: state.courses.push(action.payload)
      });
    }
    case login.EDIT_COURSE: {
      return Object.assign({}, state, {
        courses: state.courses
          .filter(item => item.id !== action.payload.id)
          .push(action.payload)
      });
    }
    case login.DELETE_COURSE: {
      if (state.courses.indexOf(action.payload) === -1) {
        return state;
      }

      return Object.assign({}, state, {
        courses: state.courses
          .filter(item => item.id !== action.payload.id)
      });
    }
    default: {
      return state;
    }
  }
}

export const getCourses = (state: State) => state.courses;
