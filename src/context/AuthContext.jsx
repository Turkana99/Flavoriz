/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext(); //Context yaradiriq

export const AuthProvider = ({ children }) => {
  // Context Providerimizi yaradiriq
  const [user, setUser] = useState(null);

  const login = (username) => {
    // useState ile Api olmadigi ucun sadece setUser giris eden sexsin adini yaziriq
    console.log(username);
    setUser({ username });
  };

  const logout = () => setUser(null); // Logoutda setUser bosaldiriq

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
