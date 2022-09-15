import React, { useState } from "react";
import classes from "./Department.module.css";
import DepartmentBookList from "./DepartmentBookList";

const departmentInfo = [
  {
    name: "CSE",
  },
  {
    name: "ECE",
  },
  {
    name: "BBA",
  },
];

const Department = () => {
  const [departmentBooks, setDepartmentBooks] = useState([]);
  // console.log(departmentBooks);
  const handleChange = (e) => {
    // console.log(e);
    //  console.log(e.target.innerHTML);
    const departmentName = e.target.innerHTML;
    // console.log(departmentName);
    fetch("http://localhost:5000/booksByDepartment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({departmentName: departmentName}),
    })
      .then((res) => res.json())
      .then((books) => setDepartmentBooks(books));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {departmentInfo.map((department) => (
          <div className={`col-md-4 text-center`} key={department.name}>
            <label className={`${classes.cardText}`} onClick={handleChange}>
              {department.name}
            </label>
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <DepartmentBookList books={departmentBooks}/>
      </div>
    </div>
  );
};

export default Department;
