import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { RemoveUser, getUser } from "../Redux/action";
import axios from "axios";
import { REMOVE_USER } from "../Redux/actiontype";

function UserCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, name, username, email } = props;
  const toast = useToast();
  const Userdata = useSelector((state) => state.user.UserData);

  // function deleteTask(id) {
  //   dispatch(RemoveUser(id));
  // }


  const deleteTask = async (id) => {
    try {
     const resp= await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
     dispatch({
      type:REMOVE_USER,
      payload:resp.data
     }).then(()=>{
      dispatch(getUser());
     })

      // toast.success("Data deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  function editTask() {}

  return (
    <div
      className="w-[300px] border-black p-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
      <Card className="text-left ">
        <CardHeader className="flex justify-between items-center">
          <Heading size="md" className="text-[16px] font-[600] text-[#60609b]">
            {id}
          </Heading>
          <Box className="flex justify-center items-center">
            <MdEditSquare onClick={editTask} />

            <MdDelete onClick={deleteTask} />
          </Box>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                size="xs"
                className="text-[16px] font-[600] text-[#60609b]"
              >
                Name
              </Heading>
              <Text pt="2" fontSize="sm">
                {name}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                className="text-[16px] font-[600] text-[#60609b]"
              >
                UserName
              </Heading>
              <Text pt="2" fontSize="sm">
                {username}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                className="text-[16px] font-[600] text-[#60609b]"
              >
                Email
              </Heading>
              <Text pt="2" fontSize="sm">
                {email}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserCard;
