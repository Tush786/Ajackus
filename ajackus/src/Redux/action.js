import axios from "axios";
import { GET_USER } from "./actiontype";

export const getUser = (id) => async (dispatch) => {
    try {
      const user = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      console.log(user)
      dispatch({
        type: GET_USER,
        payload: user.data,
      });
    } catch (err) {
      console.log(err);
    }
  };


  export const RemoveUser = (id) => async (dispatch) => {
   
  };

  export const editUser= (id) => async (dispatch) => {
   
  };