import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { primary } from "../../constants/theme.constant";

const Empty = () => <Ionicons name="file-tray-full-outline" size={100} color={primary} style={styles.fav} />;

const styles = StyleSheet.create({
  fav: {
    // marginHorizontal: 11,
    // marginVertical: 3,
  },
});

export default Empty;
