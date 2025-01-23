import { useAppointments } from "./context/AppointmentContext."; // Adjust path as needed
import { 
  ImageBackground, 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from "react-native";
import BackButton from "../components/Goback";

export default function MyAppointments() {
  const { appointments } = useAppointments();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.jpeg")}
        style={styles.background}
      >
        <BackButton />
        <View style={styles.content}>
          <Text style={styles.title}>Meus Agendamentos</Text>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <View key={appointment.id} style={styles.card}>
                  <Text style={styles.text}>
                    Dia: {new Date(appointment.date).toLocaleDateString("pt-BR")}
                  </Text>
                  <Text style={styles.text}>Horário: {appointment.time}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noAppointmentsText}>
                Nenhum agendamento encontrado.
              </Text>
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

// Styles remain the same as in the previous implementation
const styles = StyleSheet.create({
  // ... (keep the existing styles)
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    paddingTop: 66,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#94267e",
    marginBottom: 20,
    textAlign: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  card: {
    width: "90%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  noAppointmentsText: {
    fontSize: 18,
    color: "#717171",
    textAlign: "center",
    marginTop: 50,
  },
});
