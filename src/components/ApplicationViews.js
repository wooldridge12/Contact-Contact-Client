import { Route } from "react-router";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";
import { PostForm } from "./posts/PostForm";

export const ApplicationViews = () => {
    return (
        <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>
      <PostProvider>
        <Route exact path="/">
          <><div className="title">Contact-Contact</div></>
          <PostList />
        </Route>
        <Route exact path="/posts/new">
                   <PostForm />
               </Route>
      </PostProvider>
      </>
    );
};