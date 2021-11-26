import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config/globals";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
  },
};
