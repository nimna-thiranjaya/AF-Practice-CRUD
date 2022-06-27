import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const UseNavigate = useNavigate();

  const onSubmite = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      nic,
      address,
      role,
      password,
    };

    if (password === cpassword) {
      axios.post("http://localhost:3000/users/", newUser).then((res) => {
        if (res.data) {
          alert("user registration successful..!");
          UseNavigate("/");
        }
      });
    } else {
      alert("password mismatch..!");
    }
  };

  return (
    <div>
      <h3>User Register</h3>
      <form onSubmit={onSubmite}>
        Name :
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br /> <br />
        Email :
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br /> <br />
        Nic :
        <input
          type="text"
          onChange={(e) => {
            setNic(e.target.value);
          }}
        />
        <br /> <br />
        Address :
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br /> <br />
        Role :
        <select
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option selected>select Role</option>
          <option value="Student">Student</option>
          <option value="Lecturer">Lecturer</option>
        </select>
        <br /> <br />
        password :
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /> <br />
        confirm password :
        <input
          type="text"
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
        />
        <br /> <br />
        <input type="submit" value="Register" /> &nbsp;
      </form>
    </div>
  );
}

export default UserRegister;
