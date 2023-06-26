import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ children }: React.PropsWithChildren<{}>) => {
  const { user } = UserAuth()!;

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
