import React from "react";
import { useState, useEffect } from "react";

export default function Signup() {
  const initialvalue = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formvalues, setformvalues] = useState(initialvalue);
  const [formerror, setformerror] = useState({});
  const [submited, setsubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setformerror(validate(formvalues));
    setsubmitted(true);
  };
  useEffect(() => {
    console.log(formerror);
    if (Object.keys(formerror).length === 0 && submited) {
      console.log(formvalues);
    }
  });
  const validate = (value) => {
    const error = {};

    if (!value.username) {
      error.username = "Username is required";
    }
    if (!value.email) {
      error.email = "Username is required";
    }
    if (!value.password) {
      error.password = "Username is required";
    }
    if (!value.confirmpassword) {
      error.confirmpassword = "Username is required";
    }
    return error;
  };

  return (
    <div className="form-container">
      {Object.keys(formerror).length === 0 && submited ? (
        <div>cc</div>
      ) : (
        <div>k</div>
      )}
      <h1 style={{ color: "white" }}>SignUp Form</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <div>
          <label form="username">Username</label>
          <input
            placeholder="username"
            name="username"
            id="username"
            value={formvalues.username}
            onChange={handleChange}
          />
        </div>
        <p>{formerror.username}</p>
        <label form="email">Email</label>
        <input
          placeholder="Type your email"
          name="email"
          id="email"
          value={formvalues.email}
          onChange={handleChange}
        />
        <label form="email">Password</label>
        <input
          placeholder="password"
          name="password"
          id="password"
          value={formvalues.password}
          onChange={handleChange}
        />
        <label form="email"> Confirm password </label>
        <input
          placeholder="confirm password"
          name="confirm"
          id="confirm"
          value={formvalues.confirmpassword}
          onChange={handleChange}
        />
        <button>SignUp</button>
      </form>
      <h3 className="link">
        <a href="http://localhost:3000/login">Already Have an account? Login</a>
      </h3>
    </div>
  );
}
