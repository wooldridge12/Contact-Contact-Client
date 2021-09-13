import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export const Register = (props) => {
  //   const username = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const history = useHistory();

  // FOR WHEN WE SET UP OUR TUPLES
  // const existingUserCheck = () => {
  //     return fetch(`http://localhost:8088/users?email=${email.current.value}`)
  //         .then(res => res.json())
  //         .then(user => !!user.length)
  // }

  const handleRegister = (e) => {
    e.preventDefault();
    let timestamp = Date.now();

    // LOGIC FOR WHEN WE HAVE OUR TUPLES SET
    // existingUserCheck()
    //     .then((userExists) => {
    //         if (!userExists)

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: email.current.value,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        email: email.current.value,
        password: password.current.value,
        created_on: new Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(timestamp),
        active: 0,
      };

      return fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((createdUser) => {
          if (createdUser.hasOwnProperty("id")) {
            localStorage.setItem("contact_user_id", createdUser.id);
            history.push("/");
          }
        });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>

        <fieldset>
          <label htmlFor="first_name"> First Name </label>
          <input
            ref={first_name}
            type="text"
            name="first_name"
            className="form-control"
            placeholder="First name"
            required
            autoFocus
          />
        </fieldset>

        <fieldset>
          <label htmlFor="last_name"> Last Name </label>
          <input
            ref={last_name}
            type="text"
            name="last_name"
            className="form-control"
            placeholder="Last name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>

        <fieldset
          style={{
            textAlign: "center",
          }}
        >
          <button className="btn btn-1 btn-sep icon-send" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
      <section className="link--register">
        Already registered? <Link to="/login">Login</Link>
      </section>
    </main>
  );
};
