import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { QRFContext } from "./QRFProvider";
import "./QRFList.css"

export const QRFList = () => {
    const history = useHistory()
    const { qrfposts, getQRFPosts } = useContext(QRFContext);

    useEffect(() => {
        getQRFPosts();
    }, []);

    return (
        <article className="qrfposts">
            <header className="qrfposts-header">

            </header>

            {
                qrfposts.map(qrfpost => {
                    return <section key={`qrfposts--${qrfpost.id}`} className="qrfpost">
                        <div className="qrfpost__contact_user">{qrfpost.contact_user.user.first_name}</div>
                        <div className="qrfpost__urg_button"><strong>Urgency:</strong> {qrfpost.urg_button.label}</div>  
                        <div className="qrfpost__content">{qrfpost.content}</div>
                        <div className="qrfpost__phone_number"><strong>Phone Number:</strong> {qrfpost.phone_number}</div>
                        <div className="qrfpost__is_helped">{qrfpost.is_helped}</div> 

                        {/* This will link to messages */}
                        <button className="help_button" 
                        onClick={() => {
                            history.push({ pathname: "/messages" })
                        }}>Help</button>

                    </section>
                })
            }
        </article>
    )
}