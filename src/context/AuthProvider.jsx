/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const login = async (user, navigate) => {
    try {
      const response = await fetch("http://localhost:5000/api/V1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are sent and received
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Get the response body for error details
        console.error("Login failed:", errorData); // Log the error details
        throw new Error(errorData.message || "Login failed");
      }
  
      setIsAuthenticated(true);
      if (navigate) navigate("/"); 
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Rethrow the error to handle it in the component
    }
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
