import React, { useContext } from 'react';
import { Navigate , Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children}) => {
    const [loggedInUser] = useContext(UserContext)
    //  console.log(setLoggedInUser);
    return (
        <Route
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;