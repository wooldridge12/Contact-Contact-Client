import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "./PostProvider";
import "./PostList.css"

export const PostList = () => {
  const history = useHistory()
  const { posts, getPosts, } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <article className="posts">
        <header className="posts-header">

        <button className="btn btn-2 btn-sep icon-create create_post_btn"
                onClick={() => {
                    history.push({ pathname: "/posts/new" })
                }}
                >Create Post</button>

        </header>

        {
            posts.map(post => {
                return <section key={`post--${post.id}`} className="post">
                    <div className="post__contact_user">{post.contact_user.user.first_name}</div>
                    <div className="post__post_content">{post.content}</div>
                </section>
            })
        }
    </article>
  );
};
