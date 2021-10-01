import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { useAuth } from "../../contexts/Auth";

import Input from "../../components/input/Input.component";
import Button from "../../components/button/Button.component";
import styles from "./Login.style";

import { primary } from "../../constants/theme.constant";

export default function Login(props) {
  const passwordRef = useRef();
  const auth = useAuth();

  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  const OnFormSubmit = async () => {
    try {
      const data = { username, password };
      auth.login(data);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Ionicons name="log-in-outline" size={100} color={primary} style={styles.icon} />
      <View style={styles.card}>
        <Text style={styles.card__text}>Login</Text>
        <Input
          onChangeText={onChangeUsername}
          value={username}
          placeholder="username"
          autoCompleteType="username"
          textContentType="username"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry={true}
          ref={passwordRef}
        />
        <Button onPress={OnFormSubmit}>Login</Button>
      </View>
    </View>
  );
}
