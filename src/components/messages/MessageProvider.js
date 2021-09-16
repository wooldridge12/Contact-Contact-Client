import React, { useState, createContext } from "react"

export const MessageContext = React.createContext();

export const MessageProvider = (props) => {
    const [ messages, setMessages] = useState([]);

    const getMessages = () => {
        return fetch("http://localhost:8000/messages", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setMessages)
    }

    const createMessages = (message) => {
        return fetch("http://localhost:8000/messages", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then((res) => res.json())
        .then(getMessages)
    }

    return (
        <MessageContext.Provider
            value={{
                messages,
                getMessages,
                createMessages
            }}
            > {props.children}
            </MessageContext.Provider>
    )
}