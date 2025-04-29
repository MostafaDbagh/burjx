import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../pages/home';

const ProtectedRoutes = ({ Component }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return isAuth ? <Component /> : <Home />;
};

export default ProtectedRoutes;
