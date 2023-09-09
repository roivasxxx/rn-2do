import { LinkItem } from "../../types/types";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../utils/styles";
import { AllLinksProps } from "../../types/navigationTypes";
export default function LinkListItem(props: LinkItem & AllLinksProps) {
    return (
        <TouchableOpacity
            style={{
                padding: 20,
                backgroundColor: styles["content-bg"],
                borderRadius: 5,
                marginVertical: 10,
            }}
            onPress={() => props.navigation.navigate("link", { id: props.id || "" })}
        >
            <Text style={{ color: styles.text }}>{props.title}</Text>
        </TouchableOpacity>
    );
}
