// src/components/ProtectedRoute.jsx o .tsx si usás TypeScript
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext'; // Asegurate de tener el path correcto

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
