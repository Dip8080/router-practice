import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetails = () => {
    const {value} = useParams()
    const [post,setpost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
        .then(res=>res.json())
        .then(data=>setpost(data))
    },[post])
    return (
        <div>
            <h1>show post details{value}</h1>
            <p>title: {post.title}</p>
        </div>
    );
};

export default Postdetails;