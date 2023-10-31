import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Intro() {
   const navigate=useNavigate()
  return (
    <center>
     <h1>This is Intro</h1>
    <button onClick={()=>{navigate("/login")}}>login</button>
    <button onClick={()=>{navigate("/register")}}>register</button>
    <Outlet/>
    </center>
  )     
}

export default Intro