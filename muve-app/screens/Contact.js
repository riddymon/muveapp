import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import openMap from "react-native-open-maps";
import sendEmail from "react-native-email";
import { StatusBar } from "react-native-web";

export default function Contact() {
  const goToMuve = () => {
    openMap({
      latitude: 43.44848,
      longitude: -80.50214,
      zoom: 19,
      query: "Müve Registered Massage Therapy Studio",
    });
  };

  const handleEmail = async () => {
    const to = "muvermtstudio@gmail.com";
    console.log(
      await sendEmail(to, { subject: "Inquiry", checkCanOpen: false })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoLabel}>
          <Ionicons
            name="mail"
            size={16}
            color={Colors.navigationGreen}
          ></Ionicons>
        </View>
        <View style={styles.infoDetails}>
          <Text style={styles.infoDetailsText}>muvermtstudio@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoLabel}>
          <Ionicons
            name="call"
            size={16}
            color={Colors.navigationGreen}
          ></Ionicons>
        </View>
        <View style={styles.infoDetails}>
          <Text style={styles.infoDetailsText}>(519) 505-3037</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoLabel}>
          <Ionicons
            name="home"
            size={16}
            color={Colors.navigationGreen}
          ></Ionicons>
        </View>
        <View style={styles.infoDetails}>
          <Text style={styles.infoDetailsText}>
            161 Victoria St S #1A, Kitchener, ON N2G 2B7
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.mapContainer} onPress={goToMuve}>
        <View>
          <Text style={styles.mapTitle}>
            Tap the image to view our location
          </Text>
        </View>
        <View>
          <Image
            style={styles.map}
            source={require("../assets/images/map.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.emailButtonContainer}>
        <View>
          <Text style={styles.infoDetailsText}>Any questions or comments?</Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={handleEmail}>
            <View style={styles.emailButton}>
              <Text style={styles.emailButtonText}>Contact Us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  infoLabel: {
    flex: 1,
  },
  infoDetails: {
    flex: 8,
  },
  infoDetailsText: {
    fontFamily: "Raleway-Light",
    fontSize: 14,
  },
  mapContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 5,
  },
  mapTitle: {
    fontFamily: "Raleway-Light",
    fontSize: 12,
    marginBottom: 5,
  },
  map: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  emailButton: {
    borderRadius: 20,
    backgroundColor: Colors.navigationGreen,
    marginVertical: 5,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 15,
    width: 300,
  },

  emailButtonText: {
    fontFamily: "Raleway-Regular",
    color: "white",
    fontSize: 14,
  },
  emailButtonContainer: {
    display: "flex",
    alignItems: "center",
    padding: 30,
  },
});
