import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {username} = useParams();
    return (
        <>
        <h2>username : {username} </h2>
        </>
    )
}

export default User
