import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  user: []
}

export const UserLoginReducer = (state = {},{ type, payload }) => {

    switch (type) {
        case ActionTypes.USER_LOGIN_SUCCESS:{
            localStorage.setItem('userInfo',JSON.stringify(payload?.user));
            return {...state, userInfo: payload };
        }
      default:
        return state;
    }
};

export const UserLogoutReducer = (state = {}, type) => {
    switch (type) {
        case ActionTypes.USER_LOGOUT_SUCCESS:{
            localStorage.removeItem('userInfo')
            document.location.href = '/';
            return {...state};
        }
        default:
            return state;
    }
};


export const usersReducers = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_USERS:
        return { ...state, users: payload };
      default:
        return state;
    }
  }

  export const userReducers = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_USER:
        return { ...state, user: payload };
      default:
        return state;
    }
  }