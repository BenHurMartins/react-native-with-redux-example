const INITIAL_STATE = {
  name: '',
  age: 0,
};

import * as types from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_NAME:
      return {...state, name: action.payload};
    case types.DELETE_NAME:
      return {...state, name: ''};
    case types.SET_AGE:
      return {...state, age: action.payload};
    case types.DELETE_AGE:
      return {...state, age: 0};

    default:
      return state;
  }
};
