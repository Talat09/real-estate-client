/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

// Example: Assume `isAuthenticated` is a boolean representing the user's authentication status.
// You might retrieve this value from context or a global state management library like Redux.

const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // replace this with your actual authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
