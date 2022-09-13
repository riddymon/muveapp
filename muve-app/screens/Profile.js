import { View, Text, StyleSheet, Image } from "react-native";
import { useLayoutEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/Colors";

export default function Profile({ navigation, route }) {
  const { profile } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: profile.name,
      headerTintColor: profile.name === "Wan Benlate" ? "black" : "white",
      headerStyle: {
        backgroundColor: profile.color,
      },
      headerTitleStyle: {
        fontFamily: "Raleway-Regular",
        color: profile.name === "Wan Benlate" ? "black" : "white",
      },
    });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      backgroundColor: profile.color,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: "white",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    imageContainer: {
      marginVertical: 10,
    },

    profileTitle: {
      fontFamily: "Raleway-Regular",
      color: profile.name === "Wan Benlate" ? "black" : Colors.white,
      fontSize: 18,
      marginTop: 10,
    },

    profileSubTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },

    profileNumber: {
      fontFamily: "Raleway-Thin",
      color: profile.name === "Wan Benlate" ? "black" : Colors.white,
      fontSize: 18,
      marginTop: 5,
    },

    description: {
      marginVertical: 20,
      marginHorizontal: 15,
    },

    descriptionText: {
      textAlign: "justify",
      fontFamily: "Raleway-Regular",
      fontSize: 14,
      color: profile.name === "Wan Benlate" ? "black" : Colors.white,
      opacity: 0.7,
    },

    sloganText: {
      fontFamily: "Raleway-Bold",
      color: profile.color,
    },

    sloganContainer: {
      padding: 10,
      backgroundColor: Colors.white,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={profile.image} />
      </View>
      <View>
        <Text style={styles.profileTitle}>{profile.longTitle}</Text>
        <View style={styles.profileSubTitle}>
          <View>
            {profile.telephone && (
              <Text style={styles.profileNumber}>
                Phone: {profile.telephone}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{profile.description}</Text>
      </View>
      <View style={styles.sloganContainer}>
        <Text style={styles.sloganText}>"{profile.quote}"</Text>
      </View>
    </View>
  );
}
