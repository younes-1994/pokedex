import React, { createContext, useState, useContext, useEffect } from "react";
import accountService from "../services/api/account.service";
import accountStorage from "../services/asyncStorage/account.storage";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      setLoading(true);
      const storageRes = await accountStorage.get();
      if (storageRes == null) {
        setAuthData({ isLogin: false });
      } else {
        setAuthData(storageRes);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const login = async (data) => {
    try {
      await accountService.login(data);
      const payload = { isLogin: true };
      setAuthData(payload);
      await accountStorage.set(payload);
    } catch (error) {}
  };

  const logout = async () => {
    try {
      await accountService.logout();
      const payload = { isLogin: false };
      setAuthData(payload);
      await accountStorage.set(payload);
    } catch (error) {}
  };

  return <AuthContext.Provider value={{ authData, loading, login, logout }}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
