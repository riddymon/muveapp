import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Team from "../../screens/Team";
import Profile from "../../screens/Profile";
import CustomHeader from "../../components/CustomHeader";

const TeamStack = createNativeStackNavigator();

export default function TeamStackScreen() {
  return (
    <TeamStack.Navigator>
      <TeamStack.Screen
        name="Team"
        component={Team}
        options={({ navigation, route }) => ({
          header: () => (
            <CustomHeader
              navigation={navigation}
              route={route}
              isProfile={false}
              title={"Meet The Team"}
            />
          ),
        })}
      />
      <TeamStack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
          header: () => (
            <CustomHeader
              navigation={navigation}
              route={route}
              isProfile={true}
              title={""}
            />
          ),
        })}
      />
    </TeamStack.Navigator>
  );
}
