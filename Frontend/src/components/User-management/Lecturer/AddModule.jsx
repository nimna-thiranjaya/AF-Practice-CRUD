import React from "react";

function AddModule() {
  return (
    <div>
      <h3>Register Module</h3>
      <form>
        Module Name : <input type="text" /> <br /> <br />
        Module Code : <input type="text" /> <br /> <br />
        Specialzation : <input type="text" /> <br /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default AddModule;
