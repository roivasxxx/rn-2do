import { createStyleBuilder } from "react-native-zephyr";
import { View, Text } from "react-native";

export const { styles, useStyles, makeStyledComponent } = createStyleBuilder();

export const StyledView = makeStyledComponent(View);
export const StyledText = makeStyledComponent(Text);
