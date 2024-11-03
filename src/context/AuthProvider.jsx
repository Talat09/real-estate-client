/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (navigate) => {
    setIsAuthenticated(true);
    if (navigate) navigate("/profile");
  };

  const logout = (navigate) => {
    setIsAuthenticated(false);
    if (navigate) navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
