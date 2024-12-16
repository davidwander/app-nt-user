import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function MyAppointments(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.jpeg")}
        style={styles.background}
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
          <Text style={styles.title}>Meus agendamentos aqui!!</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    flex: 1,
    width: "100%"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    justifyContent: "center",
    alignItems: "center"
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