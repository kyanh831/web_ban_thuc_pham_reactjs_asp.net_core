import { ActionTypes } from "../constants/actionTypes";


export const userLogin = (user) => {
    return {
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload:user,
    };
  };

export const userLogout = (user) => {
    return {
        type: ActionTypes.USER_LOGOUT_SUCCESS,
        payload:user,
      };
  };
  
  export const setUsers = (users) => {
    return {
      type: ActionTypes.SET_USERS,
      payload:users,
    };
  };

  export const setUser = (user) => {
    return {
      type: ActionTypes.SET_USER,
      payload:user,
    };
  };