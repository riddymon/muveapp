import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../../constants/Colors";
import Book from "../../screens/Book";
import Policy from "../../screens/Policy";
import CustomHeader from "../../components/CustomHeader";

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
        options={({ navigation, route }) => ({
          header: () => (
            <CustomHeader
              navigation={navigation}
              route={route}
              isProfile={false}
              title={"Book A Massage"}
            />
          ),
        })}
      />
    </BookStack.Navigator>
  );
}
