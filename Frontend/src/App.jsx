import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserRegister from "./components/User-management/UserRegister";
import StudentHome from "./components/User-management/Student/StudentHome";
import LecturerHome from "./components/User-management/Lecturer/LecturerHome";
import StudentProfile from "./components/User-management/Student/StudentProfile";
import StudentUpdate from "./components/User-management/Student/StudentUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/userreg" element={<UserRegister />} />

        {/* Student */}
        <Route path="/shome" element={<StudentHome />} />
        <Route path="/sprofile" element={<StudentProfile />} />
        <Route path="/update/:id" element={<StudentUpdate />} />

        <Route path="/lhome" element={<LecturerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
