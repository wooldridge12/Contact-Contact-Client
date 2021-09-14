import { Route } from "react-router";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";
import { PostForm } from "./posts/PostForm";
import { QRFContext, QRFProvider } from "./qrf/QRFProvider";
import { QRFList } from "./qrf/QRFList";

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
      <QRFProvider>

        <Route exact path="/">
          <><div className="title">Contact-Contact</div></>
          <PostList />
        </Route>
        <Route exact path="/posts/new">
          <PostForm />
        </Route>

        <Route exact path="/QRF">
        <><div className="title">QRF</div></>
          <QRFList />
        </Route>

      </QRFProvider>
      </PostProvider>
      </>
    );
};