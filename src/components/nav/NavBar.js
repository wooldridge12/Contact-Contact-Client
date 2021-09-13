import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const history = useHistory();

  return (
    <ul className="navbar">
      
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Main Posts
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Nothing
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          Nothing
        </Link>
      </li>
      {localStorage.getItem("contact_user_id") !== null ? (
        <li className="nav-item">
          <button
            className="nav-link fakeLink"
            onClick={() => {
              localStorage.removeItem("contact_user_id");
              history.push({ pathname: "/" });
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </>
      )}{" "}
    </ul>
  );
};