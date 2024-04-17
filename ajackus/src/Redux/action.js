import axios from "axios";
import { ADD_USER, EDIT_USER, ERROR, GET_USER, REMOVE_USER } from "./actiontype";

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
      dispatch({
        type:ERROR,
        payload:err.response.status
      })
    }
  };



  export const RemoveUser = (id) => async (dispatch) => {
    console.log(id)
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
     console.log("Del",response)
      // dispatch({
      //   type: REMOVE_USER,
      //   payload: response.data,
      // });
    } catch (error) {
      console.error("Error editing task:", error);
      // Handle error if necessary
    }
  };

  export const editUser= (userId, userdata) => async () => {
    console.log(userdata)
    console.log(userId)
    try {
      // Send PATCH request to update the task
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        {...userdata}
      );
     console.log(response)
    //   dispatch({
    //     type: EDIT_USER,
    //     payload: response.data,
    //   });
    } catch (error) {
      console.error("Error editing task:", error);
      // Handle error if necessary
    }
  };
  
  // export const Adduser= (userdata) => async (dispatch) => {
  //   try {
  //     // Send PATCH request to update the task
  //     const response = await axios.post(
  //       `https://jsonplaceholder.typicode.com/users/`,
  //       userdata
  //     );
  //    console.log(response.data)
  //     dispatch({
  //       type: ADD_USER,
  //       payload: response.status,
  //     });
  //   } catch (error) {
  //     console.error("Error editing task:", error);
  //     // Handle error if necessary
  //   }
  // };

 