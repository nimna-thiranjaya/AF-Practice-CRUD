import React from "react";
import AddModule from "./AddModule";
import DisplayAllModules from "./DisplayAllModules";

function LecturerHome() {
  return (
    <div>
      <h3>Lecturer Home</h3>
      <hr />
      <AddModule />
      <br />
      <hr />
      <DisplayAllModules />
    </div>
  );
}

export default LecturerHome;
