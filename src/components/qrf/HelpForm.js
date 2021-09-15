import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { QRFContext } from "./QRFProvider"
import "./HelpForm.css"

export const HelpForm = () => {
    const history = useHistory()
    const { createQRFPosts, getUrgencies, urgencies } = useContext(QRFContext) 

    const [ currentQRFPost, setCurrentQRFPost] = useState({
        urg_button: 0,
        content: "",
        phone_number: "",
        is_helped: false
    })

    useEffect(() => {
        getUrgencies()
    }, [])

    const changeQRFUrgButtonState = (event) => {
        const newQRFPostState = { ...currentQRFPost }
        newQRFPostState.urg_button = event.target.value
        setCurrentQRFPost(newQRFPostState)
    }

    const changeQRFContentState = (event) => {
        const newQRFPostState = { ...currentQRFPost }
        newQRFPostState.content = event.target.value
        setCurrentQRFPost(newQRFPostState)
    }

    const changeQRFPhoneNumberState = (event) => {
        const newQRFPostState = { ...currentQRFPost }
        newQRFPostState.phone_number = event.target.value
        setCurrentQRFPost(newQRFPostState)
    }

    return (
        <form className="QRFPostForm">
            <fieldset>
                <div classNAme="form-group">
                    <label>urgency of the request:</label>
                    <select name="urgnecy" id="urgency" onChange={changeQRFUrgButtonState}>
                        <option value="0">Selecy Urgency</option>
                        {
                            urgencies.map(urgency => {
                                return(<option value={urgency.id}>{urgency.label}</option>)
                            })
                        }
                    </select>

                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label>Put Comment here</label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        value={currentQRFPost.content}
                        onChange={changeQRFContentState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="number" name="phoneNumber" required autoFocus className="form-control"
                        value={currentQRFPost.phone_number}
                        onChange={changeQRFPhoneNumberState}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const post = {
                            urg_button: currentQRFPost.urg_button,
                            content: currentQRFPost.content,
                            phone_number: currentQRFPost.phone_number,
                            is_helped: currentQRFPost.is_helped
                        }
    
                        // Send POST request to your API
                        createQRFPosts(post)
                            .then(() => history.push(`/QRF`))
                    }}
                    >Submit</button>

        </form>
    )
}