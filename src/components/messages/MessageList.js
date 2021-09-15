import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import "./MessageList.css"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <article className="messages">
            <header className="messages-header">

            </header>

            {
                messages.map(message => {
                    return <section key={`messages--${message.id}`} className="contact_message">
                        <div className="message__contact_user msg">From: {message.contact_user.user.first_name}</div>
                        <div className="message__help_section_post msg">{message.help_section_post.content}</div>
                        <div className="message__battle_buddy msg">To: {message.battle_buddy.contact_user.username}</div>
                        <div className="message__message msg">{message.message}</div>
                        <div className="message__created_on_date msg">{message.created_on_date}</div>

                        {/* This will be the messaging button */}
                        <button>Message</button>

                    </section>
                })
            }
        </article>
    )
}