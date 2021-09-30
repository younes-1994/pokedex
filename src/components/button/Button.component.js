import React, { forwardRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Button.style";

export default forwardRef((props, ref) => (
  <TouchableOpacity onPress={props.onPress} ref={ref}>
    <View style={styles.button}>
      <Text style={styles.button__text}>{props.children}</Text>
    </View>
  </TouchableOpacity>
));
