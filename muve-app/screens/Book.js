import { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import Colors from "../constants/Colors";
import { StatusBar } from "react-native-web";

export default function Book() {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
