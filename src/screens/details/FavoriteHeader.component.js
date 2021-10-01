import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavoriteHeader = ({ isFavorite, onPress }) => (
  <Ionicons
    onPress={onPress}
    name={isFavorite ? "star" : "star-outline"}
    size={25}
    color={isFavorite ? "yellow" : "white"}
    style={styles.fav}
  />
);

const styles = StyleSheet.create({
  fav: {
    marginHorizontal: 11,
    marginVertical: 3,
  },
});

export default FavoriteHeader;
