import React, { forwardRef, useState } from "react";
import { TextInput } from "react-native";
import styles from "./Input.style";
import { primary, primaryLight } from "../../constants/theme.constant";

export default forwardRef((props, ref) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <TextInput
      {...props}
      ref={ref}
      style={[styles.input, { borderColor: focus ? primary : primaryLight }]}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
});
