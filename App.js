import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// importing variables
import { colors, fontSizes, spacing, borders } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>You should have paid attention to class.😅</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
