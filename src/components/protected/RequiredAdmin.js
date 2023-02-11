import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../../services/authService";

export default function RequiredAdmin({ children }) {
  // const location = useLocation();

  return (
    <>
      {auth.getCurrentUser().isAdmin ? children : <Navigate to="/dashboard" />}
    </>
  );
}
