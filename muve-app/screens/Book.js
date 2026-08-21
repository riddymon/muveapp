import { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import Colors from "../constants/Colors";
import { StatusBar } from "react-native-web";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Book() {
  const [loaded, setLoaded] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <WebView
        source={{ uri: "https://muve.clinicsense.com/book/" }}
        style={{ height: "100%", width: "100%" }}
        onLoadEnd={() => {
          setLoaded(false);
        }}
        renderLoading={() => {
          return (
            <ActivityIndicator
              size="large"
              color={Colors.navigationGreen}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          );
        }}
        startInLoadingState
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
});
