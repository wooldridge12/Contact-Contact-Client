import React, { useState, createContext } from "react"

export const QRFContext = React.createContext();

export const QRFProvider = (props) => {
    const [qrfposts, setQRFPosts] = useState([]);
    
    const getQRFPosts = () => {
        return fetch("http://localhost:8000/helpsectionposts", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setQRFPosts)
    }   

    return (
        <QRFContext.Provider
            value={{
                qrfposts,
                getQRFPosts
            }}
        > {props.children}
        </QRFContext.Provider>
    )
}