import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// importing variables
import { colors, fontSizes } from "./color";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Building cheTracker</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.regular,
    fontSize: fontSizes.regularText,
  },
});
