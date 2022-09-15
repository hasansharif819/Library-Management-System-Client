import React from "react";
import logo from "../../../image/ist.png";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookMedical, faBookReader, faHome, faUserShield } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className={`${classes.sidenav}`}>
      <div className={`${classes.logo} ms-5 pt-3`}>
        <img src={logo} alt="" />
      </div>
      <div className={`${classes.sidenavMenu} ms-5 ps-3`}>
        <Link to="/books" className="">
          <FontAwesomeIcon  className="me-3" icon={faBook} />Books
        </Link>
        <Link to="/issueBook" className="">
          <FontAwesomeIcon className="me-3" icon={faBookReader} />Issue Book
        </Link>
        <Link to="/addBooks" className="">
          <FontAwesomeIcon className="me-3" icon={faBookMedical} /> Add Books
        </Link>
        <Link to="/addLibrarian" className="">
        <FontAwesomeIcon className="me-3" icon={faUserShield} />Make Librarian
        </Link>
        <Link to="/" className="">
        <FontAwesomeIcon className="me-3" icon={faHome} />Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
