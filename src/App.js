import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {getAllUsers}from "./services/users"

import UsersPage from "./pages/UsersPage"
import SingleUserPage from "./pages/SingleUserPage"


const App=()=>{
const [users, setUsers]=useState([])
const getUsers=async()=>{
  const userList= await getAllUsers()
  setUsers(userList)
  }
  
      useEffect(()=>{
  getUsers()
      },[]);
console.log(users)
    return (
<div>
<Router>

<Route 
exact 
path="/"
render={() => (
<UsersPage users={users}
/>
)}
/>

<Route
exact 
path="/user/:id"
render={() => (
<SingleUserPage users={users}
/>
)}
/>
</Router>
</div>
    )
}
export default App