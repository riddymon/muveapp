import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import PolicyButton from "../components/PolicyButton";
import { Overlay } from "react-native-elements";
import PolicyOverlay from "../components/PolicyOverlay";
import { StatusBar } from "expo-status-bar";

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.policyContainer}>
          <Text style={styles.instructions}>
            Please take some time to review our policies before booking an
            appointment.
          </Text>
          <View style={styles.monsteraContainer}>
            <Image
              source={require("../assets/monstera-lg.png")}
              style={styles.monsteraImage}
            />
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
          statusBarTranslucent
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
  safeArea: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grey,
    padding: 20,
  },

  policyContainer: {
    backgroundColor: Colors.white,
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

  monsteraImage: {
    marginTop: 10,
    marginBottom: 10,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  monsteraContainer: {
    display: "flex",
    alignItems: "center",
  },
});
