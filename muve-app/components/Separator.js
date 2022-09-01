import { View } from "react-native";

const ColoredLine = ({ color }) => (
  <View
    style={{
      backgroundColor: color,
      height: 1,
      width: 300,
      alignSelf: "center",
      marginTop: 30,
      opacity: 0.3,
    }}
  />
);

export default ColoredLine;
