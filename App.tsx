import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Style from "./utils/styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LinksStackNavigator from "./components/navigation/linksStackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            background: Style.background,
            text: Style.text,
            border: Style.border,
            primary: Style.text,
            card: Style.background,
            notification: Style.background
          }
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: () => {
              return route.name === "Links" ? (
                <AntDesign name="link" size={24} color={Style.text} />
              ) : (
                <FontAwesome name="list-alt" size={24} color={Style.text} />
              );
            },
            tabBarStyle: {
              paddingBottom: 5,
              paddingTop: 5
            },
            tabBarInactiveTintColor: Style.text,
            tabBarActiveTintColor: Style.text
          })}
        >
          <Tab.Screen name="Links" component={LinksStackNavigator} />
          <Tab.Screen
            name="Todos"
            children={() => (
              <View>
                <Text>Links</Text>
              </View>
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Style.background,
    alignItems: "center",
    justifyContent: "center"
  }
});
