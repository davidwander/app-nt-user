import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Models(){
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/bg2.jpeg")}
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