import axios from "axios";
import { ADD_USER, EDIT_USER, GET_USER, REMOVE_USER } from "./actiontype";

export const getUser = () => async (dispatch) => {
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
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
     console.log(response.data)
      dispatch({
        type: REMOVE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error editing task:", error);
      // Handle error if necessary
    }
  };

  export const editUser= (userId, userdata) => async (dispatch) => {
    try {
      // Send PATCH request to update the task
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        userdata
      );
     console.log(response.data)
      dispatch({
        type: EDIT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error editing task:", error);
      // Handle error if necessary
    }
  };
  
  export const Addtask= (userdata) => async (dispatch) => {
    try {
      // Send PATCH request to update the task
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users/`,
        userdata
      );
     console.log(response.data)
      dispatch({
        type: ADD_USER,
        payload: response.status,
      });
    } catch (error) {
      console.error("Error editing task:", error);
      // Handle error if necessary
    }
  };

 