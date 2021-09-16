import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import { QRFContext } from "../qrf/QRFProvider"
import "./MessageForm.css"

export const MessageForm = () => {
    const history = useHistory()
    const location = useLocation()
    const { createMessages } = useContext(MessageContext)
    const { qrfposts, getQRFPosts } = useContext(QRFContext)

    const [ currentMessage, setCurrentMessage ] = useState({
        message: "",
        battle_buddy: 0,
        help_section_post: 0,
        created_on_date: 0
    })

    useEffect(() => {
        getQRFPosts()
    }, [])

    const changeMessageState = (event) => {
        const newMessageState = { ...currentMessage }
        newMessageState.message = event.target.value
        setCurrentMessage(newMessageState)
    }

    return (
        <form className="messageForm">
            <fieldset>
                <div className="form-group">
                    <label>Message</label>
                    <input type="text" name="message" required autoFocus className="form-control"
                        value={currentMessage.message}
                        onChange={changeMessageState}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()
                        let timestamp = Date.now()

                        const message = {
                            message: currentMessage.message,
                            battle_buddy: location.state.battleBuddyId,
                            help_section_post: location.state.helpSectionPostId,
                            created_on_date: timestamp
                        }
    
                        // Send POST request to your API
                        createMessages(message)
                            .then(() => history.push(`/messages`))
                    }}
                    >Submit</button>
        </form>
    )
}