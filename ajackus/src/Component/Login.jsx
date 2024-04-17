import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
 
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const Navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
 

  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const token = useSelector((state) => state.user.token);
  console.log(token);


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email.includes("@") && !email.includes(".com")) {
     toast.error("Correct all Input field")
     return  
    }

    if (password === "" || password.length < 6) {
      toast.error("Correct all Input field")
     return  
    }

    try {
        let resp=await axios.post(`https://reqres.in/api/login`,{...user})
        console.log(resp.data)
        localStorage.setItem("Token",resp.data.token)
        
    } catch (error) {
        console.log(error)
    }

    setUser({
      email: "",
      password: "",
    });
  };
  const Token=localStorage.getItem("Token")
  if(Token){
    if(Token){
        return <Navigate to={"/User-Dashboard"}/>
      }
  }
  

  return (
    <section className="h-[100%] relative top-[20%] flex flex-col  md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            required={true}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-[#8898ee] text-white"
            type="submit"
          />
        </form>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

    
      </div>
    </section>
  );
}

export default Login;
