import React, { useState, useEffect } from "react";
import axios from "axios";
function RegisterToModule() {
  const [modules, setmodules] = useState([]);
  const [mid, setmid] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/modules/").then((res) => {
      if (res.data) {
        setmodules(res.data);
      }
    });
  }, []);
  console.log(modules);

  const uid = window.localStorage.getItem("X-AUTH");

  const onRegister = (e) => {
    e.preventDefault();
    const newRegModules = {
      mid,
      uid,
    };

    axios
      .post("http://localhost:3000/users/regmodule", newRegModules)
      .then((res) => {
        if (res.data) {
          alert("module registration success...!");
        }
      });

    console.log(newRegModules);
  };

  return (
    <div>
      <h3>Register to Subject</h3>
      <form onSubmit={onRegister}>
        Module 01 :
        <select
          onChange={(e) => {
            setmid(e.target.value);
          }}
        >
          <option selected>select Module</option>
          {modules.map((modules) => (
            <option key={modules._id} value={modules._id}>
              {modules.name}
            </option>
          ))}
        </select>
        <br /> <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterToModule;
