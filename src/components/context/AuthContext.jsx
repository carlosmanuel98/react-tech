import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUserName] = useState('usr');

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user){
      setUserName(user.username);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    sessionStorage.setItem('user', JSON.stringify(userData));
    console.log('user',userData.username);
    setUserName(userData.username);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
