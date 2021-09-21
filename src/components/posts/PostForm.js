import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { PostContext } from "./PostProvider"
import "./PostForm.css"

export const PostForm = () => {
    const history = useHistory()
    const { createPosts } = useContext(PostContext)

    const [currentPost, setCurrentPost] = useState({
        content: ""
    })

    const changePostState = (event) => {
        const newPostState = { ...currentPost }
        newPostState.content = event.target.value
        setCurrentPost(newPostState)
    }

    return (
        <form className="postForm">
            <fieldset>
                <div className="form-group">
                    <label>Knowledge to pass on.</label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentPost.content}
                        onChange={changePostState}
                    />
                </div>
            </fieldset>
            
            <button type="submit" className="btn form_post_btn"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const post = {
                            content: currentPost.content
                        }
    
                        // Send POST request to your API
                        createPosts(post)
                            .then(() => history.push(`/`))
                    }}
                    >Post</button>
            
        </form>
    )
}