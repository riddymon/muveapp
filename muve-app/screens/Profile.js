import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import Colors from "../constants/Colors";
import { StatusBar } from "react-native-web";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile({ navigation, route }) {
  const { profile } = route.params;
  const image = profile.image;

  const isLocalImage = typeof profile.image === "number";
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: profile.name,
      headerTintColor:
        profile.name === "Wan Benlate" ||
        profile.name === "Candace Young, RMT" ||
        profile.name === "Casie Diebold, RMT"
          ? "black"
          : "white",
      headerStyle: {
        backgroundColor: profile.color,
        paddingTop: insets.top,
        height: 56 + insets.top,
      },
      headerTitleStyle: {
        fontFamily: "Raleway-Regular",
        color:
          profile.name === "Wan Benlate" ||
          profile.name === "Candace Young, RMT" ||
          profile.name === "Casie Diebold, RMT"
            ? "black"
            : "white",
      },
      // headerTitle: () => (
      //   <Text
      //     style={{
      //       fontFamily: "Raleway-Regular",
      //       fontSize: 18,
      //       // paddingTop: insets.top,
      //       // paddingBottom: insets.bottom,
      //       // paddingLeft: insets.left,
      //       // paddingRight: insets.right,
      //       color:
      //         profile.name === "Wan Benlate" ||
      //         profile.name === "Candace Young, RMT" ||
      //         profile.name === "Casie Diebold, RMT"
      //           ? "black"
      //           : "white",
      //     }}
      //   >
      //     {profile.name}
      //   </Text>
      // ),
    });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: profile.color,
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      flex: 1,
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
      color:
        profile.name === "Wan Benlate" ||
        profile.name === "Candace Young, RMT" ||
        profile.name === "Casie Diebold, RMT"
          ? "black"
          : Colors.white,
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
      color:
        profile.name === "Wan Benlate" ||
        profile.name === "Candace Young, RMT" ||
        profile.name === "Casie Diebold, RMT"
          ? "black"
          : Colors.white,
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
      color:
        profile.name === "Wan Benlate" ||
        profile.name === "Candace Young, RMT" ||
        profile.name === "Casie Diebold, RMT"
          ? "black"
          : Colors.white,
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

    scrollContainer: {
      height: "100%",
      flex: 1,
      display: "flex",
      backgroundColor: profile.color,
    },
  });

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={isLocalImage ? image : { uri: image }}
          />
        </View>
        <View>
          <Text style={styles.profileTitle}>{profile.longTitle}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{profile.description}</Text>
        </View>
        {profile.quote && (
          <View style={styles.sloganContainer}>
            <Text style={styles.sloganText}>"{profile.quote}"</Text>
          </View>
        )}
        <StatusBar style="light" />
      </View>
    </ScrollView>
  );
}
