import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import Swirl from "../assets/images/swirl.svg";
import PolicyButton from "../components/PolicyButton";
import { Overlay } from "react-native-elements";
import PolicyOverlay from "../components/PolicyOverlay";
import { StatusBar } from "react-native-web";

export default function Policy() {
  const [visible, setVisible] = useState(false);
  const [policyType, setPolicyType] = useState("");

  const navigation = useNavigation();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleOpenClinicPolicy = () => {
    setPolicyType("clinic");
    setVisible(!visible);
  };

  const handleOpenPrivacyPolicy = () => {
    setPolicyType("privacy");
    setVisible(!visible);
  };

  const handleGoToBooking = () => {
    navigation.navigate("BookScreen");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.policyContainer}>
          <Text style={styles.instructions}>
            Please take some time to review our policies before booking an
            appointment.
          </Text>
          <View style={styles.swirl}>
            <Swirl width={200} height={40} opacity={0.8} />
          </View>
          <PolicyButton
            title="Clinic Policies"
            onPress={handleOpenClinicPolicy}
            continueBooking={false}
          />
          <PolicyButton
            title="Privacy Policies"
            onPress={handleOpenPrivacyPolicy}
            continueBooking={false}
          />
        </View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{
            height: "80%",
            width: "85%",
            borderRadius: 20,
            paddingTop: 10,
          }}
          animationType="fade"
        >
          <PolicyOverlay type={policyType} close={toggleOverlay} />
        </Overlay>
        <View>
          <PolicyButton
            title="Continue Booking"
            onPress={handleGoToBooking}
            continueBooking={true}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grey,
  },

  policyContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },

  instructions: {
    fontFamily: "Raleway-Regular",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },

  swirl: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
});
