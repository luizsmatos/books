import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Login from 'pages/Login';
import { useAuth } from 'hooks/useAuth';
import Books from 'pages/Books';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const {
    profile: { authenticated },
  } = useAuth();

  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/books"
        element={
          <RequireAuth>
            <Books />
          </RequireAuth>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default RootRoutes;
