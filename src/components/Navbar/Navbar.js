import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../../App";
import istLogo from "../../image/ist.png";
import Button from "../UI/Button/Button";
import classes from "./Navbar.module.css";
import firebaseConfig from '../../pages/Login/firebase.config';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(setLoggedInUser);
  const [user] = useAuthState(firebaseConfig)
  // console.log('user', user)
  const logout = () => {
      signOut(firebaseConfig)
  }
  return (
    <nav className={`container-fluid ${classes.nav}`}>
      <div className="row">
        
        <div className="col-md-9">
          <div className="ms-5 mt-2 d-flex justify-content-start">
            <div className={classes.logo}>
              <img src={istLogo} alt="" />
            </div>
            <div className={`ms-3 ${classes.name}`}>
              <h3 >
              <Link to='/' className="text-decoration-none">
                Institute of Science & Technology (IST)
                </Link>
              </h3>
              <h6 style={{color:'#dfdfdf'}}>A Center of Excellence for Education</h6>
            </div>
          </div>
        </div>
        
        <div className={`col-md-3 d-flex ${classes.navLeft}`}>
          <div className='ms-3 me-3'>
          { !user ? <button><Link to='/login' className="text-decoration-none">Login</Link></button> : <span><span>{user.displayName} </span> <button onClick={logout}>LOGOUT</button></span> }
          </div>
          <div>
            <h3 style={{ color: "#fee10f" }} className="mt-2">{loggedInUser.name}</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
