import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function Search() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/bg2.jpeg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
  }
})