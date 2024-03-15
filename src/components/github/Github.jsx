import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const getString = async () =>{
    return "bye";
}

function Github() {
    const userData = useLoaderData();
    
    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/kamiokz123")
    //         .then((data) => data.json())
    //         .then((user) => {
    //             console.log("user ", user);
    //             setUserData(user);
    //         })
    // }, [])
    return (
        <>
            <div className=" bg-gray-50 flex justify-center p-4">
                <img
                    src={userData.avatar_url}
                    alt="dp"
                    className='w-[200px] h-[200px]'
                />
                <div>
                    <h3
                        className=' font-bold m-3'
                    >username : {userData.login}</h3>
                    <h3
                        className=' font-bold m-3'
                    >followers : {userData.followers}</h3>

                </div>
            </div>
        </>
    )
}

export default Github;

export const githubApiLoader = async () => {
    const response = await fetch("https://api.github.com/users/kamiokz123");
    return response.json();
}

