import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Users from "../Component/Users";
import Usermain from "../Component/UserMain";
import Login from "../Component/Login";
import PrivateRoute from "./Privateroute";
import { useSelector } from "react-redux";
import Errorpage from "../Component/Errorpage";

export default function Allroutes() {
  const errcode = useSelector((state) => state.user.errorcode);
  console.log(errcode);
  return (
    <div>
      <Routes>
        <Route path="/Reports" />
        <Route path="/login" element={<Login />} />
        <Route
          path="/User-Dashboard"
          element={<PrivateRoute>element={<Usermain />}</PrivateRoute>}
        />
      </Routes>
    </div>
  );
}
