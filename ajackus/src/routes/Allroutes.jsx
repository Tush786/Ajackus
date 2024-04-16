import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Users from '../Component/Users';
import Usermain from '../Component/UserMain';
import Login from '../Component/Login';
import PrivateRoute from './Privateroute';

export default function Allroutes() {
  return (
    <div>
        <Routes>
          <Route exact path="/" />
          {/* <Route path="/User-Dashboard" element={<Usermain/>} /> */}
          <Route path="/Reports" />
          <Route path="/login" element={<Login/>}/>
          <Route
            path="/User-Dashboard"
            element={
              <PrivateRoute>
                element={<Usermain/>}
              </PrivateRoute>
            }
          />
        </Routes>
    </div>
  )
}
