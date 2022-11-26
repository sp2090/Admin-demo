import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {retrieveUsers} from './action/users.jsx'

const AllUsers = () => {
    const users = useSelector (state => state.users)
    const dispatch = useDispatch();
    // const[usersData, setUsersData] = useState('')
    useEffect (()=> {
        dispatch(retrieveUsers());

    },[])
    // console.log("called user",users);
    return (
        <>
        
        {(users.data) ? <ul>
        {/* {JSON.stringify(users.data)} */}
            {(users.data).map((val,key)=>{
            return <li key={key}> {JSON.stringify(val.id)} <br /> 
           Name - {JSON.stringify(val.name)} <br /> Email - {JSON.stringify(val.email)}
            </li> } )}
            </ul> : "loading..."}
        </>

    );
}

export default AllUsers;