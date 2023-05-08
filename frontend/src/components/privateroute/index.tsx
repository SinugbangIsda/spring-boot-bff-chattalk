import React from "react";
import { useDispatch } from "react-redux";
import { getUserAndToken, logout } from "../../redux/slices/authSlice";
import jwtDecode from  "jwt-decode";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { user, token } = getUserAndToken();
  const dispatch = useDispatch();
  const location = useLocation();

  const isValidToken = (): boolean => {
    if (!token && !user) return false;
    const expiry = (jwtDecode(token!) as any)?.exp;
    if (expiry * 1000 < Date.now()) {
      dispatch(logout());
      return false;
    }
    return true;
  };

  return (
    user && token && isValidToken() ? (
      <Outlet />
    ) : (
      <Navigate to = "/login" state = {{ from: location }} replace/>
    )
  )
};



export default PrivateRoute;