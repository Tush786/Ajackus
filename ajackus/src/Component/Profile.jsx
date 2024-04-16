import React, { useState } from 'react'
import {
    Box,
    Flex,

    Text,
  } from "@chakra-ui/react";

  import { useNavigate } from "react-router-dom";
  import { CgProfile } from "react-icons/cg";

function Profile() {
    const Navigate=useNavigate()
    const Token=localStorage.getItem("Token")
    function HandleLogout(){
        localStorage.removeItem("Token");
    }
  return (
    <Flex alignItems={"center"} className='ml-8 gap-4 py-4'>
            <Box>
                <CgProfile/>
            </Box>
            <Box className='text-[#fff] cursor-pointer'>
                {
                    !Token?<Text>Login</Text>:<Text className="cursor-pointer" onClick={HandleLogout}>Logout</Text>
                }
            </Box>
          </Flex>
  )
}

export default Profile
