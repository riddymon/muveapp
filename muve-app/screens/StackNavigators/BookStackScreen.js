import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Book from "../../screens/Book";
import Policy from "../../screens/Policy";

const BookStack = createNativeStackNavigator();

export default function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen
        name="Policy"
        component={Policy}
        options={{ headerShown: false }}
      />
      <BookStack.Screen name="BookScreen" component={Book} options={{}} />
    </BookStack.Navigator>
  );
}
