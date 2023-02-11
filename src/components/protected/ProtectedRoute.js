import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../services/authService";

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  return (
    <>
      {!auth.getCurrentUser() ? (
        <Navigate to="/login" state={{ path: location.pathname }} />
      ) : (
        children
      )}
    </>
  );
}
