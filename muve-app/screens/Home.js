import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
import ColoredLine from "../components/Separator";
import InfoButton from "../components/InfoButton";
import { Overlay } from "react-native-elements";
import TopicsOverlay from "../components/TopicsOverlay";
import { StatusBar } from "expo-status-bar";
import "react-native-url-polyfill/auto";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [infoType, setInfoType] = useState("");
  const bullet = Platform.OS === "ios" ? "\u2022" : "\u2B24";

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handleOpenBenefitsOverlay = () => {
    setInfoType("benefits");
    setVisible(!visible);
  };

  const handleOpenWhatToExpectOverlay = () => {
    setInfoType("expect");
    setVisible(!visible);
  };

  const handleModalityOverlay = () => {
    setInfoType("modality");
    setVisible(!visible);
  };

  return (
    <SafeAreaView
      edges={["right", "top", "left"]}
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerImage}>
        <ImageBackground
          style={styles.headerBackground}
          source={require("../assets/images/studio.png")}
        >
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.homeTitle}>
                Müve Registered Massage Therapy Studio
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Live in the Müvement</Text>

            <Image
              source={require("../assets/monstera-lg.png")}
              style={styles.monsteraImage}
            />

            <Text style={styles.description}>
              The basic philosophy of Müve embraces the concept of vis
              Medicatrix naturae, which is aiding the ability of the body to
              heal itself by increasing health and well-being through touch.
            </Text>
            <ColoredLine color={Colors.black} />
            <Text style={styles.title}>Müve Towards....</Text>

            <Image
              source={require("../assets/monstera-lg.png")}
              style={styles.monsteraImage}
            />

            <View style={styles.contentList}>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text>{bullet}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text style={styles.bulletTextItem}>
                    {"    "}
                    Reducing or eliminating pain
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text>{bullet}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text style={styles.bulletTextItem}>
                    {"    "}
                    Improving joint mobility
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text>{bullet}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text style={styles.bulletTextItem}>
                    {"    "}
                    Improving lymphatic drainage
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text>{bullet}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text style={styles.bulletTextItem}>
                    {"    "}
                    Reducing muscular tension
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.description}>
              Treatments provided by a Registered Massage Therapist at Müve
              Studio can offer significant benefits for a variety of conditions
              and for diverse patient populations.{"\n\n"}Whether you need to
              have a moment of relaxation, reduce muscle tension or attain
              relief from acute or chronic pain, massage therapy can enhance
              your overall well-being. It can help alleviate musculoskeletal
              disorders associated with everyday stress, muscular overuse,
              physical manifestation of mental distress and many persistent pain
              syndromes.
            </Text>
            <ColoredLine color={Colors.black} />
            <Text style={styles.buttonInstructions}>
              Tap the topics below to learn more!
            </Text>
            <InfoButton
              buttonText="Benefits of Massage Therapy"
              onPress={handleOpenBenefitsOverlay}
            />
            <InfoButton
              buttonText="What to Expect"
              onPress={handleOpenWhatToExpectOverlay}
            />
            <InfoButton
              buttonText="Modality Info"
              onPress={handleModalityOverlay}
            />
          </View>
          <View style={{ width: "100%", marginVertical: 10 }}></View>
        </ScrollView>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          height: "85%",
          width: "85%",
          borderRadius: 20,
          paddingTop: 10,
        }}
        animationType="fade"
        statusBarTranslucent
      >
        <TopicsOverlay type={infoType} close={toggleOverlay} />
      </Overlay>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.white,
  },
  headerImage: {
    flex: 0,
    width: "100%",
    height: 200,
    alignSelf: "stretch",
    backgroundColor: Colors.inactiveGrey,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  homeTitle: {
    fontFamily: "Raleway-Regular",
    fontSize: 18,
    textAlign: "center",
    color: Colors.navigationGreen,
  },

  headerBackground: {
    width: "100%",
    height: "100%",
  },

  headerContainer: {
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 40,
    display: "flex",
    justifyContent: "center",
    backgroundColor: Colors.inactiveGrey,
  },

  title: {
    fontFamily: "Roboto-Light",
    fontSize: 22,
    textAlign: "center",
    marginTop: 18,
  },

  description: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    marginHorizontal: 15,
    textAlign: "justify",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 0,
    marginStart: 10,
  },
  bullet: {
    width: 10,
  },
  bulletTextItem: {
    fontFamily: "Roboto-Light",
    fontSize: 18,
  },
  contentList: {
    flex: 0,
    flexDirection: "column",
    marginHorizontal: "15%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.navigationGreen,
  },
  buttonInstructions: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Roboto-Thin",
  },
  bulletTextItem: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
  },
  mainContent: {
    marginBottom: 10,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  monsteraImage: {
    marginTop: 10,
    marginBottom: 10,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
