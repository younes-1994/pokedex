import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import Loading from "../components/loading/Loading.component";

const Navigation = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading status={loading} />;
  }
  return <NavigationContainer>{authData?.isLogin ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};
export default Navigation;
