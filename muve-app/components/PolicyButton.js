import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function PolicyButton({
  title,
  onPress,
  continueBooking,
} = props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      borderRadius: 5,
      backgroundColor: Colors.policyButtonGreen,
      marginVertical: 5,
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      padding: 5,
    },
    text: {
      fontFamily: "Raleway-Regular",
      fontSize: 16,
      color: Colors.white,
    },
    containerContinue: {
      display: "flex",
      borderRadius: 5,
      backgroundColor: Colors.buttonBlue,
      marginVertical: 5,
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      padding: 10,
      marginTop: 50,
      width: 300,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View
        style={continueBooking ? styles.containerContinue : styles.container}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
