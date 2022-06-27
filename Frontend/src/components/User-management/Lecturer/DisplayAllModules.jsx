import axios from "axios";
import React, { useState, useEffect } from "react";

function DisplayAllModules() {
  const [modules, setmodules] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/modules/").then((res) => {
      if (res.data) {
        setmodules(res.data);
      }
    });
  }, []);

  return (
    <div>
      <h3>All Modules</h3>
      <button>Refresh</button> <br />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Specialzation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((modules) => (
            <tr>
              <td>{modules.name}</td>
              <td>{modules.code}</td>
              <td>{modules.specialzation}</td>
              <td>
                <button>update</button> &nbsp;
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayAllModules;
