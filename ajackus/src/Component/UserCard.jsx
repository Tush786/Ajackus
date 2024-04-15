import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  ModalCloseButton,
  ModalContent,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { RemoveUser, getUser } from "../Redux/action";
import UserForm from "./UserForm";
import { Modal, ModalBody } from "flowbite-react";

function UserCard(props) {
  console.log(props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id,name,username,email } = props;
  console.log(id);
  const toast = useToast();
  const Userdata = useSelector((state) => state.user.UserData);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)

  async function deleteTask(id) {
    dispatch(RemoveUser(id)).then(() => {
      dispatch(getUser());
    });
    toast({
      title: "Task Deleted",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  async function editTask(id) {
    onOpen()
    //   dispatch({
    //     type: EDITING,
    //     payload: { id: d },
    //   });
  }

  

  return (
    <div className="w-[400px] border-black p-4" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <Card className="text-left ">
        <CardHeader className="flex justify-between items-center">
          <Heading size="md" className="text-[16px] font-[600] text-[#60609b]">{id}</Heading>
          <Box className="flex justify-center items-center">
            <MdEditSquare
              onClick={() => {
                editTask(id);
              }}
            />

<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      
      <ModalContent>
   
        <ModalCloseButton />
        <ModalBody>
          <h1>Model For Form</h1>
        </ModalBody>

       
      </ModalContent>
    </Modal>
            <MdDelete
              onClick={() => {
                deleteTask(id);
              }}
            />
          </Box>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" className="text-[16px] font-[600] text-[#60609b]">
                Name
              </Heading>
              <Text pt="2" fontSize="sm">
                {name}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" className="text-[16px] font-[600] text-[#60609b]">
               UserName
              </Heading>
              <Text pt="2" fontSize="sm">
                {username}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" className="text-[16px] font-[600] text-[#60609b]">
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
