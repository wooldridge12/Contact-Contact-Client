import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import "./MessageList.css"

export const MessageList = () => {
    const history = useHistory()
    const { messages, getMyMessages } = useContext(MessageContext)

    useEffect(() => {
        getMyMessages();
    }, []);

    return (
        <article className="messages">
            <header className="messages-header">

            </header>

            {
                messages.map(message => {
                    return <section key={`messages--${message.id}`} className="contact_message">
                        <div className="message__contact_user msg">From: {message.sender.user.first_name}</div>
                        <div className="message__help_section_post msg">{message.help_section_post.content}</div>
                        <div className="message__battle_buddy msg">To: {message.reciever.user.username}</div>
                        <div className="message__message msg">{message.message}</div>
                        <div className="message__created_on_date msg">Date: {message.created_on_date}</div>

                        {/* Message button */}
                        <button onClick={() => {
                            history.push({ pathname: "/messages/new", state: {
                                battleBuddyId: message.reciever.id,
                                helpSectionPostId: message.help_section_post.id
                            }})
                        }}
                        >Message</button>

                    </section>
                })
            }
        </article>
    )
}