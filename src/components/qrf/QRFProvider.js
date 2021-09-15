import React, { useState, createContext } from "react"

export const QRFContext = React.createContext();

export const QRFProvider = (props) => {
    const [qrfposts, setQRFPosts] = useState([]);
    const [urgencies, setUrgencies] = useState([]);
    
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

    const createQRFPosts = (qrfpost) => {
        return fetch("http://localhost:8000/helpsectionposts", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(qrfpost)
        })
        .then(response => response.json())
        .then(getQRFPosts)
    }

    const getUrgencies = () => {
        return fetch("http://localhost:8000/urgencies", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setUrgencies)
    }

    return (
        <QRFContext.Provider
            value={{
                qrfposts,
                urgencies,
                getQRFPosts,
                createQRFPosts,
                getUrgencies
            }}
        > {props.children}
        </QRFContext.Provider>
    )
}