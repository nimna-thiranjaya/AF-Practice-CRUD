import React, { useState, useEffect } from "react";
import axios from "axios";
function ShowRegModules() {
  const [modules, setmodules] = useState([]);

  const id = window.localStorage.getItem("X-AUTH");
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      if (res.data) {
        setmodules(res.data.modules);
      }
    });
  }, []);

  return (
    <div>
      <h3>show registerd Modules</h3>
      <table border="1">
        <thead>
          <tr>
            <th>module Name</th>
            <th>Specialzation</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((modules) => (
            <tr>
              <td>{modules.name}</td>
              <td>{modules.specialzation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowRegModules;
