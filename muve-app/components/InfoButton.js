import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function InfoButton({ buttonText, onPress } = props) {
  return (
    <View style={styles.infoButtonContainer}>
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonText}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoButton: {
    borderRadius: 20,
    backgroundColor: Colors.navigationGreen,
    marginVertical: 5,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 15,
    width: 350,
  },

  infoButtonText: {
    fontFamily: "Raleway-Regular",
    color: "white",
    fontSize: 14,
  },
  infoButtonContainer: {
    display: "flex",
    alignItems: "center",
    margin: 2,
  },
});
