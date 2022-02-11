import React, { useEffect, useState } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('/fakedata.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='grid-Style'>
            {
                blogs.map(blog => <BlogDetail 
                    key={blog.id}
                    blog={blog}
                ></BlogDetail>)
            }
        </div>
        
    );
};

export default Blog;