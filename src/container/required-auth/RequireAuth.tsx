import React from "react";
import { Navigate, useLocation } from "react-router";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = true;
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};
