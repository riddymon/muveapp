import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import ProfileBubble from "../components/ProfileBubble";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native-web";
import Colors from "../constants/Colors";
import { useMuveStaff } from "../providers/MuveStaffProvider";

export default function Team() {
  const navigation = useNavigation();
  const { loading, staff } = useMuveStaff();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <StatusBar style="dark" />
        {!loading && (
          <View style={styles.buttonContainer}>
            {staff.map((profile) => {
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
        )}
        {loading && (
          <ActivityIndicator
            size="large"
            color={Colors.navigationGreen}
            style={{
              height: "100vh",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
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
