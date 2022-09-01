import { View, Text } from "react-native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Book() {
  return (
    <WebView
      source={{ uri: "https://muve.clinicsense.com/book/" }}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
