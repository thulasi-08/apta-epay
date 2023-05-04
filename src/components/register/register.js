import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./register.css";

function Register() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <label>First Name </label>
          <input type="text" name="firstName" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lastName" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>EMail </label>
          <input type="email" name="email" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit" >Register</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="register-form">
        <div className="title">Create account</div>
        {isSubmitted ? <div>User is successfully registered </div> : renderForm}
      </div>
    </div>
  );
}

export default Register;