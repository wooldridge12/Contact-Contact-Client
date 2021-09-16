import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Aside.css"


export const Aside = () => {
    const history = useHistory()


    return (
        <aside class="menu">
  <p class="menu-label">
    Help Section
  </p>
  <ul class="menu-list">
      <button onClick={() => {
        history.push({ pathname: "/help"})
      }}>Request Help</button>
      <div>Need help with anything? Dangerous thoughts? questions about 1st Civ Div? Or just someone to help you through? Click here. We all at some point need help figuring things out just because you hung up your uniform doesnt mean you left everything behind. We understand and have a battle buddy system to help you through this hard time you may be facing, Or to just answer questions abdout the work force, school, bills, living,... </div>
  </ul>
  <p class="menu-label">
    Battle Buddy Section
  </p>
  <ul class="menu-list">

  <button onClick={() => {
        
      }}>Become A Battle Buddy</button>
      <div>Help someone in need</div>
  </ul>
</aside>
    )
}