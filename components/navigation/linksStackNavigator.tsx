import { View, Text } from "react-native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import LinksList from "./tabs/links/linksList";
import Link from "./tabs/links/link";
import { LinkScreenParamList } from "../../types/navigationTypes";

const LinksNavigator = createNativeStackNavigator<LinkScreenParamList>();

const LinksStackNavigator: React.FunctionComponent<any> = (props: any) => {
    return (
        <LinksNavigator.Navigator
            initialRouteName="all-links"
            screenOptions={{ headerShown: false }}
        >
            <LinksNavigator.Screen
                name="all-links"
                component={LinksList}
            />
            <LinksNavigator.Screen name="link">{(props) => <Link {...props} />}</LinksNavigator.Screen>
        </LinksNavigator.Navigator>
    );
};

export default LinksStackNavigator;
