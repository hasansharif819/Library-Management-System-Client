import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import firebaseConfig from '../../pages/Login/firebase.config';


const RequireAuth = ({ children }) => {
    const [user] = useAuthState(firebaseConfig);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;