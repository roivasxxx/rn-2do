import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            style={{
                marginTop: insets.top * 1.2,
                marginHorizontal: 10,
            }}
            nativeID="tab"
        >
            {children}
        </ScrollView>
    );
};

export default Tab;
