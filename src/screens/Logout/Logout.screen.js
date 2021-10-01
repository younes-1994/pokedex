import React, { useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useAuth } from "../../contexts/Auth";

import Loading from "../../components/loading/Loading.component";
import styles from "./Logout.style";

export default function Logout(props) {
  const auth = useAuth();

  useEffect(() => {
    auth.logout();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading status={true} />
    </View>
  );
}
