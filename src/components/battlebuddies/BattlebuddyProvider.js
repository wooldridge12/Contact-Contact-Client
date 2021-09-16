import React, { useState, createContext } from "react"

export const BattlebuddyContext = React.createContext();

export const BattlebuddyProvider = (props) => {
    const [ battlebuddies, setBattlebuddies ] = useState([]);

    const getBattlebuddies = () => {
        return fetch("http://localhost:8000/battlebuddies", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then(setBattlebuddies)
    }

    const createBattlebuddy = (battlebuddy) => {
        return fetch("http://localhost:8000/battlebuddies", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
                "Content-type": "application/json"
            },
            body:JSON.stringify(battlebuddy)
        })
        .then((res) => res.json())
        .then(getBattlebuddies)
    }


    return (
        <BattlebuddyContext.Provider
            value={{
                battlebuddies,
                getBattlebuddies,
                createBattlebuddy
            }}
            > {props.children}
            </BattlebuddyContext.Provider>
    )
}