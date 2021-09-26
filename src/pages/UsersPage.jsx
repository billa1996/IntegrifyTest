import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Cards";

const UsersPage = ({users})=>{

    return(
        
        <Layout>
    <div className="d-flex flex-wrap">
    {
        users&&users.length>0?users.map(user=> {
         return   <Card key={user.id} user={user} />
        }):<h2>User list is empty</h2>
    }
    </div>
    </Layout>
    )
}

export default UsersPage
