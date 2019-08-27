import * as types from './types';

export const setName = name => {
  return {type: types.SET_NAME, payload: name};
};

export const setAge = age => {
  return {type: types.SET_AGE, payload: age};
};

export const deleteName = () => {
  return {type: types.DELETE_NAME};
};

export const deleteAge = () => {
  return {type: types.DELETE_AGE};
};

export const deleteAllAsync = () => {
  return dispatch => {
    // *****
    //This timeout has the purpose to demonstrate
    //how to use Redux with an async call
    // *****
    setTimeout(() => {
      dispatch({type: types.DELETE_NAME});
    }, 1000);

    setTimeout(() => {
      dispatch({type: types.DELETE_AGE});
    }, 1000);
  };
};
