import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function UserForm() {
  const [arr, setArr] = useState([]);
  const [userform, setUserform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const Fullname = `${userform.firstName} ${userform.lastName}`;
      const newData = {
        name: Fullname,
        email: userform.email,
        company: {
          name: userform.department,
        },
      };

      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/users/`,
        { ...newData }
      );
      console.log(response);
      setArr([...arr, response.data]);
      setUserform({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-[500px] border-dashed p-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
    <Text className="text-center text-[20px] font-[600]">Add User</Text>
      <form
        onSubmit={
          handleSubmit
        }
      >
        <FormControl className="py-2">
          <FormLabel className="text-[16px] font-[600] py-2">
            FirstName
          </FormLabel>
          <Input
            className="bg-[#f8f7f7] w-full p-2"
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="Enter FirstName"
            value={userform.firstName}
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
            name="lastName"
            type="text"
            placeholder="Enter LastName"
            value={userform.lastName}
          />
        </FormControl>

        <FormControl className="py-2 mb-2">
          <FormLabel className="text-[16px] font-[600] py-2">Email</FormLabel>
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

        <FormControl className="py-2 mb-2">
          <FormLabel className="text-[16px] font-[600] py-2">
            Department
          </FormLabel>
          <Input
            className="bg-[#f8f7f7] w-full p-2"
            autoFocus
            onChange={handleChange}
            type="text"
            name="department"
            placeholder="Enter Department"
            value={userform.department}
          />
        </FormControl>

        <Input
          className="bg-[#ec8181] w-full p-2 text-[#fff] rounded-sm py-2"
          mt={4}
          colorScheme="teal"
          type="submit"
        />
      </form>
    </div>
  );
}

export default UserForm;
