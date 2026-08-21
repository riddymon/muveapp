import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function CustomHeader({ navigation, route, isProfile, title }) {
  const insets = useSafeAreaInsets();
  const profile = route.params || null;

  const profileColor =
    profile &&
    (profile?.profile.name === "Candace Young, RMT" ||
      profile?.profile.name === "Casie Diebold, RMT")
      ? "black"
      : "white";
  let headerTitle = isProfile ? profile?.profile.name : title;

  const textColor = isProfile ? profileColor : Colors.navigationGreen;

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: 10,
        backgroundColor: profile ? profile.profile.color : "transparent",
        flexDirection: "row",
        alignItems: "center",
        height: 56 + insets.top,
      }}
    >
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ width: 40 }}
      >
        <Ionicons name="arrow-back" size={24} color={textColor} />
      </TouchableOpacity>

      {/* Centered Title */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Raleway-Regular",
            fontSize: 18,
            color: textColor,
          }}
          numberOfLines={1}
        >
          {headerTitle}
        </Text>
      </View>

      {/* Right placeholder to balance layout */}
      <View style={{ width: 40 }} />
    </View>
  );
}
