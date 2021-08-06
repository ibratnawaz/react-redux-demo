import { CREATE_NEW_USER, UPDATE_USER, DELETE_USER } from './userTypes';

const initialState = {
  users: localStorage.getItem('users') || [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        users: [...users, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.map((user) => user.id !== action.payload.id),
      };

    default:
      return {
        ...state,
      };
  }
};
