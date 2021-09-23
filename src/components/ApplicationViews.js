import { Route } from "react-router";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";
import { PostForm } from "./posts/PostForm";
import { QRFContext, QRFProvider } from "./qrf/QRFProvider";
import { QRFList } from "./qrf/QRFList";
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { HelpForm } from "./qrf/HelpForm";
import { MessageForm } from "./messages/MessageForm";
import "./AppViews.css"

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
      <MessageProvider>

        <Route exact path="/">
          <><div className="contact_main">Contact-Contact</div></>
          <PostList />
        </Route>
        <Route exact path="/posts/new">
          <PostForm />
        </Route>

        <Route exact path="/QRF">
        <><div className="contact_qrf">Quick Reaction Force</div></>
          <QRFList />
        </Route>

        <Route exact path="/messages">
        <><div className="contact_messages">MESSAGES</div></>
          <MessageList />
        </Route>
        <Route exact path="/messages/new">
          <MessageForm />
        </Route>

        <Route exact path="/help">
        <><div className="title">Help Form</div></>
          <HelpForm />
        </Route>

      </MessageProvider>
      </QRFProvider>
      </PostProvider>
      </>
    );
};