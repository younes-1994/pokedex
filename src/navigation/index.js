import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/Login.screen";
import Home from "../screens/home/Home.screen";
import Details from "../screens/details/Details.screen";
import Favorites from "../screens/favorites/Favorites.screen";

const Stack = createNativeStackNavigator();
const initialRouteName = "Login";

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Login" component={Login} options={{ title: "ورود" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "پوکدکس" }} />
        <Stack.Screen name="Details" component={Details} options={{ title: "جزییات" }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ title: "علاقه مندی ها" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
