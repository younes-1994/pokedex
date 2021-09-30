import React, { useRef } from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Login.style";
import Input from "../../components/input/Input.component";
import Button from "../../components/button/Button.component";
import accountService from "../../services/api/account.service";

export default (props) => {
  const passwordRef = useRef();

  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const OnFormSubmit = async () => {
    try {
      const data = { username, password };
      await accountService.login(data);
      props.navigation.navigate("Home");
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Login</Text>
      <Input
        onChangeText={onChangeUsername}
        value={username}
        placeholder="نام کاربری"
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
        placeholder="رمز عبور"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry={true}
        ref={passwordRef}
      />
      <Button onPress={OnFormSubmit}>ورود</Button>
    </View>
  );
};
