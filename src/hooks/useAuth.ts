import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'admin123'; // In production, use environment variables
const AUTH_TOKEN_KEY = 'brideful_auth_token';
const AUTH_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const expiry = localStorage.getItem(AUTH_TOKEN_KEY + '_expiry');

    if (token && expiry) {
      const expiryTime = parseInt(expiry, 10);
      if (Date.now() < expiryTime) {
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      } else {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(AUTH_TOKEN_KEY + '_expiry');
      }
    }

    setIsAuthenticated(false);
    setIsLoading(false);
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      const token = Math.random().toString(36).substr(2, 9);
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_TOKEN_KEY + '_expiry', (Date.now() + AUTH_EXPIRY).toString());
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY + '_expiry');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
};
