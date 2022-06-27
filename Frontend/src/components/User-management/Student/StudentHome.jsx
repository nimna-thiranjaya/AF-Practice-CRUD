import React from "react";
import RegisterToModule from "./RegisterToModule";

function StudentHome() {
  return (
    <div>
      <h3>Student Home</h3>
      <a href="/sprofile">
        <button>profile</button>
      </a>
      <br />
      <RegisterToModule />
    </div>
  );
}

export default StudentHome;
