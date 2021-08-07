import {
  CREATE_NEW_USER,
  DELETE_USER,
  UPDATE_USER,
  FETCH_USER,
} from './userTypes';

export const newUser = (user) => {
  return {
    type: CREATE_NEW_USER,
    payload: user,
  };
};

export const editUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const viewUser = (id) => {
  return {
    type: FETCH_USER,
    payload: { id },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: { id },
  };
};
