import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/home/Home.screen";
import Details from "../screens/details/Details.screen";
import Favorites from "../screens/favorites/Favorites.screen";
import Logout from "../screens/Logout/Logout.screen";

import { primary } from "../constants/theme.constant";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: primary,
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const screenOptionsTab = (props) => ({
  tabBarIcon: (e) => tabBarIcon(e, props),
  tabBarActiveTintColor: primary,
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});
const tabBarIcon = ({ focused, color, size }, { route, navigation }) => {
  let iconName;

  if (route.name === "HomeStack") {
    iconName = focused ? "home" : "home-outline";
  } else if (route.name === "FavStack") {
    iconName = focused ? "star" : "star-outline";
  } else if (route.name === "Logout") {
    iconName = focused ? "log-out" : "log-out-outline";
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{ title: "Pokedex" }} />
      <Stack.Screen name="Details" component={Details} options={{ title: "Details" }} />
    </Stack.Navigator>
  );
};

const FavStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favorites" }} />
      <Stack.Screen name="Details" component={Details} options={{ title: "Details" }} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionsTab}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{ title: "Home" }} />
      <Tab.Screen name="FavStack" component={FavStackNavigator} options={{ title: "Favorites" }} />
      <Tab.Screen name="Logout" component={Logout} options={{ title: "Logout" }} />
    </Tab.Navigator>
  );
};

export default AppStack;
