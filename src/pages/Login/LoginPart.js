import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import avatar from "../../image/avatar-2.svg";
import "./LoginPart.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";
import SocialAuth from "./SocialAuth";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginPart = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  const { handleSubmit } = useForm();

  //email and password
  const onSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // console.log(res.user);
          const { email, error, displayName, photoURL } = res.user;
          let newUserInfo = { ...user };
          //console.log(newUserInfo);
          newUserInfo = {
            isSigned: true,
            email: email,
            name: displayName,
            photo: photoURL,
            success: true,
            error: error,
          };
          //console.log(newUserInfo);
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          navigate.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          //console.log(error.message);
        });
    }
  };

  const handleInput = (e) => {
    // console.log( e.target.name);
    // console.log(e.target.value)
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.target.value
        );
    }
    if (e.target.name === "password") {
      // const isValidPassword = true;
      const isValidPassword = e.target.value.length > 6;
      //console.log(isValidPassword);
      isFormValid = isValidPassword;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className=" ms-5 login-form">
      <div className=" ms-5 text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginImg">
            <img className="text-center m-3" src={avatar} alt="" />
          </div>
          <h2 className="title m-3">WELCOME</h2>
          <div className="input-div one">
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
            <div className="input-filed">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onBlur={handleInput}
                className="input"
              />
            </div>
          </div>
          <div className="underLine"></div>
          <div className="input-div pass mt-3">
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
            </div>
            <div className="input-filed">
              {/* <h5>Password</h5> */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handleInput}
                className="input"
                // value={user.password}
              />
            </div>
          </div>
          <div className="underLine"></div>
          <div className=" pb-2">
            <p className=" forget mt-3">
              Don't have an account yet? <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
          <button type="submit" className="btn" required>
            Login
          </button>
        </form>
      </div>
      <div className="social">
        <SocialAuth setLoggedInUser={setLoggedInUser} user={user} setUser={setUser}></SocialAuth>
    </div>
    </div>
  );
};

export default LoginPart;
