import { EDIT_USER, GET_CARTDATA, GET_CATEGORY, GET_DATA, GET_USER, LOGIN_USER, LOGOUT_USER, POST_USER, RESET_USER } from "./actiontype";

  
  const initialState = {
    userData: [],

  };
  
  export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER:
        return { ...state, userData: payload };
      default:
        return state;
    }
  };
  