import React, {useState, useEffect} from 'react';

const Blog = (props) => {
    console.log(props)
    return (
        <div>
            <label>{props.articales.title}</label>
            <p>{props.articales.description}</p>
        </div>
    );
}

export default Blog;
