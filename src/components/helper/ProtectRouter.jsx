import React from 'react';
import { Navigate } from 'react-router-dom';
import { dataUser } from '../../UserContext';
const ProtectRouter = ({ children }) => {
  const { login } = React.useContext(dataUser);
  if (login) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectRouter;
