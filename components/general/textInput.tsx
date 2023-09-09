import { TextInput as RNTextInput, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import styles from "../../utils/styles";

export default function TextInput(props: { value: string; onChangeText: (text: string) => void; label: string }) {
    const [isFocused, setIsFocused] = useState(false);
    const bottom = useSharedValue(props.value ? 0 : 20);

    useEffect(() => {
        bottom.value = withSpring(isFocused || props.value ? 0 : 20, { damping: 100 });
    }, [isFocused]);

    const translateY = useAnimatedStyle(() => ({ top: bottom.value }));

    return (
        <View
            style={{
                height: 60,
                width: "100%",
                position: "relative",
            }}
        >
            <RNTextInput
                style={{
                    backgroundColor: styles["content-bg"],
                    color: styles.text,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 5,
                    borderColor: isFocused ? styles.green : styles.border,
                    borderWidth: 1,
                    padding: 5,
                    zIndex: 0,
                    fontSize: 12,
                    display: "flex",
                }}
                value={props.value}
                onChangeText={props.onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Animated.View
                style={[
                    {
                        position: "absolute",
                        zIndex: 1,
                        paddingHorizontal: 5,
                        shadowRadius: 0,
                    },
                    translateY,
                ]}
                pointerEvents="none"
            >
                <Text style={{ color: isFocused || props.value ? styles.green : styles.text, fontSize: 12 }}>{props.label}</Text>
            </Animated.View>
        </View>
    );
}
