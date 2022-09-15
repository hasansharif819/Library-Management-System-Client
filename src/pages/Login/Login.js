import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import loginVideo from "../../image/login.mp4";
import classes from "./Login.module.css";
import Loading from '../../components/Loading/Loading';
import auth from './firebase.config';
import './Login.css';
import avatar from "../../image/avatar-2.svg";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    let signInError;
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user || gUser || fUser ) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, fUser, from, navigate])

    if (loading || gLoading || fLoading) {
        return <Loading></Loading>
    }

    if(error || gError || fError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Email sent, Please verify')
        }
        else{
            toast('Enter valid email address');
        }
    }
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className={`img offset-md-1 col-md-4 ${classes.video}`}>
            <video
              loop={true}
              autoPlay={true}
              autoplaytimeout={10000}
              autoplayhoverpause='true'
              muted={true}
            >
              <source src={loginVideo} type="video/mp4" />
            </video>
          </div>
          <div className={`offset-md-2 col-md-5 me-5 ${classes.loginPart}`}>
         <div className="ms-5 login-form">
                <div className="ms-5 text-center">
                     
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="loginImg">
            <img className="text-center m-3" src={avatar} alt="" />
          </div>
          <div className="input-div one">
            <div className="input-icon">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
            <div className="input-filed">
                            
                        <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
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
                            
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        </div>
                        <div className="underLine"></div>

                        {signInError}
                        <div className='py-3'>
                        <button type="submit" className="btn" required>Login</button>
                        </div>
                    </form>
                    <div className=" pb-2">
            <p className=" forget mt-3">
               <Link to="/signup" className='text-decoration-none'>Create a new account</Link> 
               
            <small className='forget ms-3' onClick={resetPassword}>Forgot Password</small>
            </p>
          </div>
                    <div className='d-flex justify-content-center align-items-center gap-5'>
                    <button
                        onClick={() => signInWithGoogle()}
                        // className="btn"
                    >
                        <img src="https://i.ibb.co/9YN8J87/icons8-google-48.png" alt=""/>
                    </button>
                    <button
                        onClick={() => signInWithFacebook()}
                        // className="btn"
                    >
                        <img src="https://i.ibb.co/SxJgMgb/icons8-facebook-48.png" alt=""/>
                    </button>
                    </div>
                </div>
            </div>
  </div>
  </div>
</div>
    );
};

export default Login;