import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../adduser/Add.css";
import axios from "axios"
import toast from 'react-hot-toast';
function Add() {
  
  const users ={
     name:"",
     email:"",
     password:"",


  }
  const [user,setUser]=useState(users);
  const navigate=useNavigate();

   
  const inputHandler = (e) => {
   
    const {name,value} = e.target;
     setUser({...user,[name]:value});
     console.log(user);
  }

  const submitForm = async(e)=>{


    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/create", user);
      toast.success(response.data.msg, {position:"top-bottom",width:"12px"});
      navigate("/");
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className='adduser'>
      <Link to={"/"}>Back</Link>
      <h3>Add New User</h3>
      <form className='adduserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor='Name'>Name</label>
          <input type="text" onChange={inputHandler} id="name" name="name" autoComplete='off' placeholder='Full Name' />
        </div>

        <div className="inputGroup">
          <label htmlFor='Email'>Email</label>
          <input type="email" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='amit@gmail.com' />
        </div>

        <div className="inputGroup">
          <label htmlFor='Password'>PassWord</label>
          <input type="Password" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='Pa$$W@@rd' />
        </div>

        <div className="inputGroup">
        <button type='submit'>ADD USER</button>
        </div>
      </form>
    </div>
  )
}

export default Add;
