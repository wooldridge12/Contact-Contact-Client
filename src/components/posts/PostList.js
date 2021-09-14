import React, { useContext, useEffect } from "react";
import { PostContext } from "./PostProvider";
import "./PostList.css"

export const PostList = () => {
  const { posts, getPosts, } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <article className="posts">
        <header className="posts-header">
            <div className="title">Contact-Contact</div>

        {/* Add a create post button here */}

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
