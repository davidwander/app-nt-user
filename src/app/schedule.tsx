import { View, Text, StyleSheet } from "react-native";

export default function Schedule(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>calendário aqui</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
})