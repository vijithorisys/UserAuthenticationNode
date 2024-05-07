import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EmployeeList from "./components/employee/EmployeeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProtect from "../middleware/AuthProtect";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route element={<AuthProtect/>}>
            <Route path="/employee" element={<EmployeeList />}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
