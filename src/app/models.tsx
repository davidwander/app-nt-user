import { ImageBackground, Text, StyleSheet, View } from "react-native";
import BackButton from "../components/Goback";

export default function Models(){

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/bg2.jpeg")}
    >
      <BackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Modelos aqui</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 35,
    left: 8,
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 40,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 3
  }
})