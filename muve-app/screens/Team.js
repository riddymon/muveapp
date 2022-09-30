import { View, Text, StyleSheet } from "react-native";
import team from "../assets/team";
import ProfileBubble from "../components/ProfileBubble";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native-web";

export default function Team() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.buttonContainer}>
        {team.map((profile) => {
          return (
            <ProfileBubble
              profile={profile}
              key={profile.name}
              handlePress={() => {
                navigation.navigate("Profile", { profile: profile });
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    padding: 15,
  },

  buttonContainer: {
    width: "100%",
  },
});
