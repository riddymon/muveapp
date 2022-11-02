import { View, StyleSheet, ScrollView } from "react-native";
import team from "../assets/team";
import ProfileBubble from "../components/ProfileBubble";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native-web";

export default function Team() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
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
      </ScrollView>
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
    height: "100%",
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 0,
  },

  scrollContainer: {
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
});
