//Actions
export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export const addData = (payload) =>({
  type: ADD_DATA,
  payload
});

export const removeData = (payload) =>({
  type: REMOVE_DATA,
  payload
});

