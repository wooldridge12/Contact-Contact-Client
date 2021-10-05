import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Aside.css"


export const Aside = () => {
    const history = useHistory()

    return (
        <aside class="menu">
  <p class="menu-label flexbox">
    Help Section
  </p>
  <ul class="menu-list">
      <button class="hs-btn" onClick={() => {
        history.push({ pathname: "/help"})
      }}>Request Help</button>
      <div>Need help with anything? Dangerous thoughts? Questions about 1st Civ Div? Or just someone to help you through? Click here. We all at some point need help figuring things out just because you hung up your uniform doesnt mean you left everything behind. We understand and have a battle buddy system to help you through this hard time you may be facing, Or to just answer questions abdout the work force, school, bills, living,... </div>
  </ul>
  <p class="menu-label">
    Battle Buddy Section
  </p>
  <ul class="menu-list">


  <button class="bb-btn" onClick={() => {
    return fetch("http://127.0.0.1:8000/battlebuddies", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("contact_user_id")}`,
        "Content-type": "application/json"
      },
      body:JSON.stringify({

      }),
  })
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem("active", res.active);
    })
  }
} > Become A Battle Buddy</button>
      <div> Help someone in need, become a battle buddy. Do you have wisdom to pass to someone in need or feeling lost? perfect try to become a battle buddy. Suicide is often preventible. We survive combat zones with our battle buddies lets not stop now! We all struggle and survive to tell the tale. “Per researchers’ estimates, 30,177 Global War on Terror veterans have died by suicide, compared to 7,057 who have died while deployed in support of the Global War on Terror.” -MilitaryTimes  </div>
</ul>
</aside>
)}