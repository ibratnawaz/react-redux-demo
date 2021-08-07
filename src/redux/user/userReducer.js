import {
  CREATE_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
  FETCH_USER,
} from './userTypes';

const data = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : [];

const initialState = {
  users: data,
  userDetails: {},
};

const setToLocalStorage = (localData) =>
  localStorage.setItem('users', JSON.stringify(localData));

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      const { users } = state;
      action.payload.id = users.length + 1000;
      action.payload.position = users.length;
      const newList = [...users, action.payload];
      setToLocalStorage(newList);
      return {
        ...state,
        users: newList,
      };
    case UPDATE_USER:
      const idx = state.users.findIndex((user) => user.id == action.payload.id);
      state.users[idx] = action.payload;
      setToLocalStorage(state.users);
      return {
        ...state,
      };

    case FETCH_USER:
      return {
        ...state,
        userDetails: state.users.find((user) => user.id === action.payload.id),
      };

    case DELETE_USER:
      const list = state.users.filter((user) => {
        if (user.id !== action.payload.id) return user;
      });
      setToLocalStorage(list);
      return {
        ...state,
        users: list,
      };

    default:
      return {
        ...state,
      };
  }
};
