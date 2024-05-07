import React, { useEffect, useState } from "react";
import EmployeeApi from "../../../services/EmployeeApi";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const fetchEmployeeList = async () => {
    try {
      const response = await EmployeeApi.EmployeeList();
      setEmployeeList(response.userData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEmployeeList();
  }, []);

  return (
    <>
      <h2>EmployeeList</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {employeeList?.map((data,index)=>{
                const {firstName,lastName,email}= data
                return(
                    <tr key={index}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
