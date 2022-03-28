import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { address } = useAuth();
  const location = useLocation();

  if (!address) {
    return <Navigate to="/welcome" replace state={{ from: location }} />;
  }
  return children;
};
