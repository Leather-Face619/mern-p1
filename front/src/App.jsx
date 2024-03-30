import React from 'react'
import Home from './home/Home'

import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import { Toaster } from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider";

const App = () => {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course"  element={authUser ? <Courses /> : <Navigate to="/signup"/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App