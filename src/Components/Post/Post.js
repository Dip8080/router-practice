import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Post = () => {
    const [post ,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data =>setPost(data))
    },[])
    return (
        <div>
           <h5>this is post{post.length}</h5> 
           {
               post.map(x=>

                <Link key={x.id} to={`/post/${x.id}`}>{x.id}</Link>
              )
           }
           <Outlet></Outlet>
        </div>
        
    );
};

export default Post;<h5>this is post</h5>