import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../constants/Colors";
import Team from "../../screens/Team";
import Profile from "../../screens/Profile";

const BookStack = createNativeStackNavigator();

export default function TeamStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen
        name="Team"
        component={Team}
        options={{
          title: "Meet The Team",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Raleway-Regular",
            color: Colors.navigationGreen,
          },
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <BookStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Book A Massage",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Raleway-Regular",
            color: "white",
          },
        }}
      />
    </BookStack.Navigator>
  );
}
