import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Department from "./Department/Department";
import classes from "./LibraryHome.module.css";

const LibraryHome = () => {
  return (
    <div className={`container-fluid ${classes.library}`}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h1 className={`mt-3 mb-4 text-center ${classes.title}`}>IST Library Management System</h1>
           <Department />
        </div>
      </div>
    </div>
  );
};

export default LibraryHome;
