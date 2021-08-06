import { CREATE_NEW_USER, DELETE_USER, UPDATE_USER } from './userTypes';

export const createUser = (user) => {
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

export const createUser = (id) => {
  return {
    type: DELETE_USER,
    payload: { id },
  };
};
