import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLog = (e) => {
    e.preventDefault();
    const userdata = {
      email,
      password,
    };
    // console.log(userdata);

    axios
      .post("http://localhost:3000/users/login", userdata)
      .then((res) => {
        if (res.data.success) {
          alert("login Ok");
          window.localStorage.setItem("X-AUTH", res.data.token);
          if (res.data.Role === "Student") {
            window.location.href = "/shome";
          } else {
            window.location.href = "/lhome";
          }
        } else {
          alert("invalid login");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h3>User Login</h3>
      <form onSubmit={onLog}>
        email :{" "}
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br /> <br />
        password :{" "}
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <input type="submit" value="Login" /> &nbsp;
      </form>
      <br />
      <a href="/userreg">
        <button>user register</button>
      </a>
    </div>
  );
}

export default Login;
