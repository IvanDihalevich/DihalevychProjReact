// src/context/AuthContext.jsx
import PropTypes from "prop-types";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authUtils';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    const users = [
      { email: "admin@example.com", password: "admin123", isAdmin: true },
      { email: "user@example.com", password: "user123", isAdmin: false }
    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      setUser({ email: user.email, isAdmin: user.isAdmin });
      setError(null);
      navigate('/');
    } else {
      setError("Invalid email or password.");
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    navigate('/login');
  };

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
