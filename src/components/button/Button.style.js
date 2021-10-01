import { StyleSheet } from "react-native";
import { primary } from "../../constants/theme.constant";

const styles = StyleSheet.create({
  button: {
    minWidth: 200,
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 50,
  },
  button__text: {
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});
export default styles;
