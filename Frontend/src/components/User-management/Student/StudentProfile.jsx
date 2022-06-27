import axios from "axios";
import React, { useEffect, useState } from "react";

function StudentProfile() {
  const [user, setUser] = useState([]);

  const id = window.localStorage.getItem("X-AUTH");

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      if (res.data) {
        setUser(res.data);
      }
    });
  }, []);

  const onLogOut = () => {
    if (window.confirm("Are you sure to Log out?")) {
      window.localStorage.removeItem("X-AUTH");
      window.location.href = "/";
    }
  };

  const onDelete = () => {
    if (window.confirm("Are you sure to Dlete Account?")) {
      axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
        if (res.data) {
          alert("delete success...!");
          window.location.href = "/";
        }
      });
    }
  };

  const onRedirect = () => {
    window.location.href = `/update/${id}`;
  };

  return (
    <div>
      <h3>User Profile</h3>
      name : {user.name} <br />
      <br />
      address : {user.address}
      <br />
      <br />
      email : {user.email}
      <br />
      <br />
      nic : {user.nic}
      <br />
      <br />
      <button
        onClick={() => {
          onRedirect();
        }}
      >
        update
      </button>{" "}
      &nbsp;
      <button onClick={onDelete}>Delete Account</button>&nbsp;
      <button onClick={onLogOut}>logOut</button>
    </div>
  );
}

export default StudentProfile;
