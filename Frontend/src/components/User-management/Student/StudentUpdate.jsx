import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudentUpdate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const params = useParams();

  const id = params.id;

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      if (res.data) {
        // console.log(res.data);
        setName(res.data.name);
        setAddress(res.data.address);
        setNic(res.data.nic);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setCpassword(res.data.password);
        setRole(res.data.role);
      }
    });
  }, []);

  const onUpdate = (e) => {
    e.preventDefault();

    const upUser = {
      name,
      email,
      nic,
      address,
      role,
      password,
    };
    if (password === cpassword) {
      axios.put(`http://localhost:3000/users/${id}`, upUser).then((res) => {
        if (res.data) {
          alert("Update successful....!");
          window.location.href = "/sprofile";
        }
      });
    } else {
      alert("Password miss Match...!");
    }
  };

  return (
    <div>
      <h3>User Update</h3>
      <form onSubmit={onUpdate}>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br /> <br />
        Email :
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br /> <br />
        Nic :
        <input
          type="text"
          value={nic}
          onChange={(e) => {
            setNic(e.target.value);
          }}
        />
        <br /> <br />
        Address :
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br /> <br />
        Role :
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option>select Role</option>
          <option value="Student">Student</option>
          <option value="Lecturer">Lecturer</option>
        </select>
        <br /> <br />
        password :
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /> <br />
        confirm password :
        <input
          type="text"
          value={cpassword}
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
        />
        <br /> <br />
        <input type="submit" value="Update" /> &nbsp;
      </form>
    </div>
  );
}

export default StudentUpdate;
