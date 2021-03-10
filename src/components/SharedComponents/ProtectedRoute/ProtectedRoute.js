import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthorized, getUserStatus } from "../../../features/auth/authSlice";

export default function ProtectedRoute({ children, ...rest }) {
  const isAuthorized = useSelector(selectIsAuthorized);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStatus());
  }, [dispatch])


  return (
    <>
      {
        isAuthorized === null ? '' : <Route
        {...rest}
        render={({ location }) =>
          isAuthorized ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
      }
      
    </>
  );
}
