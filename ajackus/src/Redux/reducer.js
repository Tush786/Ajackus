import { ADD_USER, EDITING, EDIT_TASK, EDIT_USER, GET_USER, REMOVE_USER } from "./actiontype";

  
  const initialState = {
    userData: [],
    editformid:"",
    editing:false,
  };
  
  export const Reducer = (state = initialState, { type, payload }) => {
    console.log(payload)
    switch (type) {
      case GET_USER:
        return { ...state, userData: payload };
        case EDIT_USER:
          return { ...state, userData: payload };
          case ADD_USER:
            return { ...state, status: payload };
          case EDIT_TASK:
            return { ...state, editing:false,editformid:"" };
            case EDITING:
             return {...state,editing:true, editformid:payload.id}
            case REMOVE_USER:
             return {...state, userData: payload}
      default:
        return state;
    }
  };
  