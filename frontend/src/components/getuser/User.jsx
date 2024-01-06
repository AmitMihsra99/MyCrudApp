import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./User.css";
import axios from 'axios';
import toast  from "react-hot-toast";

const User = () => {
  

  const [users,setUser]=useState([]);

  
  useEffect(()=>{

    const featchData = async()=>{
    const response= await axios.get("http://localhost:8080/api/v1/user/getalluserdata")
    setUser(response.data) ;
    }
     featchData();
  },[])   

const deleteUser= async(userId)=>{
  await axios.delete(`http://localhost:8080/api/v1/user/delete/${userId}`)
  .then((response)=>{
    // console.log(response)
    setUser((prevUser)=>prevUser.filter((user)=>user._id !==userId))
    toast.success(response.data.msg,{position:'top-left'});
  })
  .catch((error)=>{
     console.log(error);
  })

} 
 
  return (
    <div className='userTable'>
       <h1 className='usetabledata'>User Data</h1>
       <Link to={"/add"} className='addbutton'>Add User</Link>
       <table border={5} callPadding={20} cellSpacing={10} >
         <thead>
             <tr>
               <th>S.No</th>
               <th>User Name</th>
               <th>User Email</th>
               <th>Action</th>
             </tr>
         </thead>
         <tbody>
           {
              users.map((user,index)=>{
                return(
                  <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className='actionButtons'>
              <button onClick={(e)=>deleteUser(user._id)}>Delete</button>
               <Link to={'/edit/'+user._id}>Edit</Link>
              </td>
             </tr>
                )
            })
           }
         
         </tbody>
       </table>
    </div>
  )
}

export default User



