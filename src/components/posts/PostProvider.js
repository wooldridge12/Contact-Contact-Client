import react, { useState, createContext } from "react"

export const PostContext = createContext();

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

    return (
        <PostContext.Provider
          value={{
              posts,
              getPosts
          }}
          >
              {props.children}
          </PostContext.Provider>
    )
}