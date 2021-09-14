import React, { useState, createContext } from "react"

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        return fetch("http://localhost:8000/posts", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setPosts);
    }

    const createPosts = (post) => {
        return fetch("http://localhost:8000/posts", { 
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(getPosts)
    }

    return (
        <PostContext.Provider
          value={{
              posts,
              getPosts,
              createPosts
          }}
          >
              {props.children}
          </PostContext.Provider>
    )
}