import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../constants/Colors";
import Book from "../../screens/Book";
import Policy from "../../screens/Policy";

const BookStack = createNativeStackNavigator();

export default function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen
        name="Policy"
        component={Policy}
        options={{
          headerShown: false,
        }}
      />
      <BookStack.Screen
        name="BookScreen"
        component={Book}
        options={{
          title: "Book A Massage",
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
    </BookStack.Navigator>
  );
}
