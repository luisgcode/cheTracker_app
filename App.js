import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
          <Text style={styles.h1}>Welcome.</Text>
        </View>

        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor={colors.primaryWhite}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={colors.primaryWhite}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
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
    marginTop: -30,
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

  loginContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 130,
  },

  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: colors.primaryWhite,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: fontSizes.bodyText,
    color: colors.primaryWhite,
  },

  loginButton: {
    backgroundColor: colors.secondaryBlue,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },

  loginButtonText: {
    color: colors.primaryWhite,
    fontSize: fontSizes.bodyText,
    fontWeight: "bold",
  },
});
