import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
// importing variables
import { colors, fontSizes, spacing, borders } from "./theme";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("./assets/app-logo.png")}
            style={styles.logo}
          ></Image>
        </View>

        <View style={styles.hero}>
          <Text style={styles.h1}>Welcome to Cheque Tracker.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primaryBlue,
    justifyContent: "center",
  },

  safeArea: {
    flex: 1,
  },

  logo: {
    width: 230,
    height: 230,
    resizeMode: "contain",
  },

  hero: {
    textAlign: "center",
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
