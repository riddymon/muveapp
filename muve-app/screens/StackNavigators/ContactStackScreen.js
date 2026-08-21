import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "../../screens/Contact";
import CustomHeader from "../../components/CustomHeader";

const ContactStack = createNativeStackNavigator();

export default function ContactStackScreen() {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="ContactScreen"
        component={Contact}
        options={({ navigation, route }) => ({
          header: () => (
            <CustomHeader
              navigation={navigation}
              route={route}
              isProfile={false}
              title={"How To Find Us"}
            />
          ),
        })}
      />
    </ContactStack.Navigator>
  );
}
