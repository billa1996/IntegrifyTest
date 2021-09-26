import React from 'react';
import {Link} from "react-router-dom";
import Button from './Button'


const Card = ({user}) => { 
    return(
        <div className="card mr-4 mb-3" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p>@{user.username}</p>
            <a href={user.url}>{user.url}</a>
            <Link to={`/user/${user.id}`}>
            <Button buttonTitle={'MORE DETAILS'} />
            </Link>
            </div>

        </div>
    )
}

export default Card;