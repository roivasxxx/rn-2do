import { TouchableOpacity, Text, View } from "react-native";
import { Tag } from "../../types/types";
import styles from "../../utils/styles";

type TagProps = Tag & { onPress: (id: string) => void; isSelected: boolean };
export default function TagComponent(props: TagProps) {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.id)}>
            <View
                style={{
                    display: "flex",
                    alignSelf: "center",
                    width: "auto",
                    padding: 7,
                    backgroundColor: `${props.color}${props.isSelected ? "ff" : "40"}`,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 5,
                }}
            >
                <Text style={{ color: props.isSelected ? styles.text : styles["text-inactive"] }}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    );
}
