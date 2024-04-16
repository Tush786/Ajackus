import {
  Box,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "flowbite-react";

import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { RemoveUser, editUser, getUser } from "../Redux/action";
import axios from "axios";


function UserCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, name, username, email } = props;
  const toast = useToast();
  const [openModal, setOpenModal] = useState(false);

  const [userform, setUserform] = useState({
    name: "",
    username: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function deleteTask(id) {
    dispatch(RemoveUser(id)).then(() => {
      dispatch(getUser());
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(editUser(id,userform)).then(()=>{
      dispatch(getUser())
    })
  }

  function editTask(id) {
    setOpenModal(true);
    const obj = {
      name,
      username,
      email,
    };
    setUserform(obj);
  }

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

            <>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                  <form onSubmit={handleSubmit}>
                    <FormControl className="py-2">
                      <FormLabel className="text-[16px] font-[600] py-2">
                        FirstName
                      </FormLabel>
                      <Input
                        className="bg-[#f8f7f7] w-full p-2"
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        value={userform.name}
                        autoFocus
                      />
                    </FormControl>

                    <FormControl className="py-2">
                      <FormLabel className="text-[16px] font-[600] py-2">
                        LastName
                      </FormLabel>
                      <Input
                        className="bg-[#f8f7f7] w-full p-2"
                        onChange={handleChange}
                        autoFocus
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        value={userform.username}
                      />
                    </FormControl>

                    <FormControl className="py-2 mb-2">
                      <FormLabel className="text-[16px] font-[600] py-2">
                        Email
                      </FormLabel>
                      <Input
                        className="bg-[#f8f7f7] w-full p-2"
                        autoFocus
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={userform.email}
                      />
                    </FormControl>

                    <Input
                      className="bg-[#ec8181] w-full p-2 text-[#fff] rounded-sm py-2"
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                    />
                  </form>
                </Modal.Body>
              </Modal>
            </>

            <MdDelete onClick={() => deleteTask(id)} />
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
