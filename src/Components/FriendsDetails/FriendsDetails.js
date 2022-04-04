import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendsDetails = () => {
  const {holdvalue}= useParams();
  const [friend , setFriend] = useState({})
  useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${holdvalue}`)
      .then(res=>res.json())
      .then(data => setFriend(data))
  },[friend])
//   const {name,username,email,address} = friend
    return (
        <div>
            <h1>the name of friend is :{friend.name}</h1>
            <h1>the email of friend is :{friend.email}</h1>
            <h1>the username of friend is :{friend.username}</h1>
            <h1>the city of friend is :{friend.address?.city}</h1>
           
        </div>
    );
};

export default FriendsDetails ;