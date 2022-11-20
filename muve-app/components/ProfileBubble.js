import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ProfileBubble({ profile, handlePress } = props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: profile.color,
      borderRadius: 40,
      marginBottom: 10,
      padding: 10,
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },

    image: {
      width: 110,
      height: 110,
      borderRadius: 40,
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
    description: {
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 10,
    },
    tap: {},
    bubbleDescription: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: 2,
      justifyContent: "center",
    },
    imageContainer: {
      flex: 1,
    },
    nameTitle: {
      fontFamily: "Raleway-Bold",
      fontSize: 16,
      opacity: 0.8,
    },
    position: {
      fontFamily: "Raleway-Light",
      fontSize: 14,
    },
  });

  const bubbleImage = profile.image;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={profile.image} />
        </View>
        <View style={styles.bubbleDescription}>
          <View style={styles.description}>
            <Text style={styles.nameTitle}>{profile.name}</Text>
            <Text style={styles.position}>{profile.position}</Text>
          </View>
          <View style={styles.tap}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
