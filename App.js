import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// importing variables
import { colors, fontSizes, spacing, borders } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/app-logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.h1}>Welcome to cheTracker😅</Text>
      <Text style={styles.bodytext}>It's time to start coding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
  },

  logo: {
    width: 230,
    height: 230,
    resizeMode: "contain",
  },

  h1: {
    fontSize: fontSizes.titleH1,
    color: colors.primaryWhite,
    textAlign: "center",
  },
  h2: {
    fontSize: fontSizes.titleH2,
    color: colors.secondaryBlue,
    textAlign: "center",
  },

  bodytext: {
    fontSize: fontSizes.bodyText,
    color: colors.primaryWhite,
  },
});
