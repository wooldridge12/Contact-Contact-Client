import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { Aside } from "./aside/Aside";

export const ContactContact = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("contact_user_id")) {
            return (
              <>
                <NavBar />
                <Aside />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route
        path="/login"
        render={() => {
          if (localStorage.getItem("contact_user_id")) {
            return <Redirect to="/" />;
          } else {
            return <Login />;
          }
        }}
      />
  
      <Route
        path="/register"
        render={() => {
          if (localStorage.getItem("contact_user_id")) {
            return <Redirect to="/" />;
          } else {
            return <Register />;
          }
        }}
      />
    </>
  );