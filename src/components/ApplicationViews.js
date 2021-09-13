import { Route } from "react-router";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";

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
          <PostList />
        </Route>
      </PostProvider>
      </>
    );
};