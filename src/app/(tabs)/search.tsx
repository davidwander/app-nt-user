import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Search() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/bg2.jpeg")}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather 
          name="chevron-left" 
          size={32} 
          color="white" 
          style={styles.icon}
        />
      </TouchableOpacity>
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