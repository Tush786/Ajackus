import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Users from '../Component/Users';

export default function Allroutes() {
  return (
    <div>
        <Routes>
          <Route exact path="/" />
          <Route path="/User-Dashboard" element={<Users/>} />
          <Route path="/Reports" />
        </Routes>
    </div>
  )
}
