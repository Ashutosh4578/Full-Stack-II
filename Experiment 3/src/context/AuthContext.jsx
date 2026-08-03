import { createContext, useState, useEffect } from "react";
import {
  saveUser,
  saveToken,
  getUser,
  getToken,
  logoutUser,
} from "../utils/auth";
import { loginUser } from "../utils/fakeApi";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Restore user session
  useEffect(() => {
    const storedUser = getUser();
    const storedToken = getToken();

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  // Login
  const login = (email, password) => {
    const response = loginUser(email, password);

    if (!response.success) {
      return false;
    }

    saveUser(response.user);
    saveToken(response.token);

    setUser(response.user);
    setToken(response.token);

    return true;
  };

  // Logout
  const logout = () => {
    logoutUser();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;