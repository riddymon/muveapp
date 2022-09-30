import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../constants/Colors";
import Contact from "../../screens/Contact";

const ContactStack = createNativeStackNavigator();

export default function ContactStackScreen() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="ContactScreen"
        component={Contact}
        options={{
          title: "How To Find Us",
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
    </ContactStack.Navigator>
  );
}
