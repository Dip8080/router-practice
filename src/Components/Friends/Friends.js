import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Friends = () => {
    const [friends, setfriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>setfriend(data))
    },[])
    return (
        <div>
            <h1>this is Friens page {friends.length}</h1>
            {
                friends.map(x=><Friend Friend={x} key={x.id}></Friend>)
            }
        </div>
    );
};


const Friend =(props)=>{
    const{name, username ,id} = props.Friend;
    const navigate = useNavigate()
    const funHandle =()=>{
        navigate(`/friends/${id}`)
    }
    return(
        <div>
            <h1>name:{name}</h1>
            <h1>usrename:{username}</h1>
            <button onClick={funHandle}>{username} : {id}</button>
        </div>
    )
}
export default Friends;