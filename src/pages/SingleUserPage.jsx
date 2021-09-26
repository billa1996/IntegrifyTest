import React from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout"


const SingleUserPage = ({users})=>{

     const id = useParams().id;
     const selectedUser = users&&users.find((user) => String(user.id) === String(id));
     

return(
  
    <Layout>
        {selectedUser&& <>
<h4>{selectedUser.name}</h4>
<p>{selectedUser.username}</p>
<p>{selectedUser.email}</p>
<p>{selectedUser.phone}</p>
<p>{selectedUser.company.name}</p>
<p>{selectedUser.website}</p>
<p>{selectedUser.address.street}</p>
<p>{selectedUser.address.suite}</p>
<p>{selectedUser.address.city}</p>
<p>{selectedUser.address.zipcode}</p>
</>}
    </Layout>
 
)

}

export default SingleUserPage