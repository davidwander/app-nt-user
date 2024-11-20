import { theme } from "@/theme"
import { ImageBackground, Text, StyleSheet } from "react-native"

export default function Home() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg1.jpeg")}
      style={styles.background}
    >
      <Text
        style={styles.title}
      >
        Welcome to the Home Screen!
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily.medium,
  },
})