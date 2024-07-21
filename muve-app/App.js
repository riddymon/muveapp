import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Colors from "./constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import BookStackScreen from "./screens/StackNavigators/BookStackScreen";
import TeamStackScreen from "./screens/StackNavigators/TeamStackScreen";
import ContactStackScreen from "./screens/StackNavigators/ContactStackScreen";
import { MuveStaffProvider } from "./providers/MuveStaffProvider";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () =>
    Font.loadAsync({
      "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
      "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
      "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
      "Raleway-Thin": require("./assets/fonts/Raleway-Thin.ttf"),
      "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Raleway-Italic": require("./assets/fonts/Raleway-Italic.ttf"),
      "Raleway-LightItalic": require("./assets/fonts/Raleway-LightItalic.ttf"),
      "Raleway-BoldItalic": require("./assets/fonts/Raleway-BoldItalic.ttf"),
    });

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      setFontsLoaded(true);
    }
    getFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.navigationGreen} />
      </View>
    );
  } else {
    return (
      <MuveStaffProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor={Colors.activeGreen}
            inactiveColor={Colors.inactiveGrey}
            barStyle={{ backgroundColor: Colors.navigationGreen }}
            shifting={false}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="home" size={20} color={color}></Ionicons>
                ),
                tabBarLabel: <Text style={styles.tabBarLabel}>Home</Text>,
              }}
            />

            <Tab.Screen
              name="Book"
              component={BookStackScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons
                    name="add-circle-outline"
                    size={20}
                    color={color}
                  ></Ionicons>
                ),
                tabBarLabel: <Text style={styles.tabBarLabel}>Book</Text>,
              }}
            />

            <Tab.Screen
              name="The Team"
              component={TeamStackScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="people" size={20} color={color}></Ionicons>
                ),
                tabBarLabel: <Text style={styles.tabBarLabel}>The Team</Text>,
              }}
            />

            <Tab.Screen
              name="Contact Us"
              component={ContactStackScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="call" size={20} color={color}></Ionicons>
                ),
                tabBarLabel: <Text style={styles.tabBarLabel}>Contact Us</Text>,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </MuveStaffProvider>
    );
  }
}

const styles = StyleSheet.create({
  tabBarLabel: { fontFamily: "Raleway-Regular" },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
