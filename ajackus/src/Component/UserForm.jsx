import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Textarea } from "flowbite-react";
import React, { useState } from "react";


function UserForm() {
    const [userform, setUserform] = useState({
        name: "",
        username: "",
        email: "",
        pone:""
      });

      function handleChange(e) {
        const { name, value } = e.target;
       
        setUserform((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(userform);
      }

    function handleSubmit(){

    }
  return (
    
    <div className="w-[500px] border-dashed">
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          onChange={handleChange}
          name="name"
          placeholder="Enter title"
          value={userform.title}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Deadline of task</FormLabel>
        <Input
          onChange={handleChange}
          name="username"
          type="date"
          placeholder="Enter date"
          value={userform.taskdate}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter description about task"
          value={userform.description}
        />
      </FormControl>

      <Input mt={4} colorScheme="teal" type="submit" />
    </form>
  </div>
        
   

  );
}

export default UserForm;
