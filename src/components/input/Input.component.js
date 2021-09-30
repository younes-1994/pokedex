import React, { forwardRef } from "react";
import { TextInput } from "react-native";
import styles from "./Input.style";

export default forwardRef((props, ref) => <TextInput {...props} ref={ref} style={styles.input} />);
