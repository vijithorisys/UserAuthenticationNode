import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EmployeeList from "./components/employee/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/employee' element={<EmployeeList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
