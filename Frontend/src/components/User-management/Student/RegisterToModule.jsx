import React from "react";

function RegisterToModule() {
  return (
    <div>
      <h3>Register to Subject</h3>
      <form>
        Module 01 :{" "}
        <select>
          <option>sample 1</option>
          <option>sample 2</option>
        </select>{" "}
        <br /> <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterToModule;
