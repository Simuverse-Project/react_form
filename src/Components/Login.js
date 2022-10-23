import React from "react";

export default function Login() {
  return (
    <div className="form-container">
      <h1 style={{ color: "white" }}>LogIn</h1>
      <form className="form-login">
        <label form="email">Username</label>
        <input placeholder="username" name="username" id="username" />
        <label form="email"> Confirm password</label>
        <input placeholder="confirm password" name="confirm" id="confirm" />
        <button>Login</button>
      </form>
    </div>
  );
}
