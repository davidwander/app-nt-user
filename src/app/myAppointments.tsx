import { 
  ImageBackground, 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from "react-native";
import { Calendar, CheckCircle2 } from "lucide-react-native";
import BackButton from "../components/Goback";
import { useAppointments } from "./context/AppointmentContext.";

export default function MyAppointments() {
  const { appointments } = useAppointments();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg2.jpeg")}
        style={styles.background}
      >
        <BackButton />
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Calendar color="#94267e" size={24} />
            <Text style={styles.title}>Meus Agendamentos</Text>
          </View>

          <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <TouchableOpacity 
                  key={appointment.id} 
                  style={styles.appointmentCard}
                >
                  <View style={styles.appointmentCardContent}>
                    <CheckCircle2 
                      color="#4CAF50" 
                      size={24} 
                      style={styles.checkIcon} 
                    />
                    <View style={styles.appointmentDetails}>
                      <Text style={styles.dateText}>
                        {formatDate(appointment.date)}
                      </Text>
                      <Text style={styles.timeText}>
                        Horário: {appointment.time}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <View style={styles.emptyState}>
                <Calendar color="#94267e" size={64} />
                <Text style={styles.noAppointmentsText}>
                  Você ainda não possui agendamentos
                </Text>
                <Text style={styles.noAppointmentsSubtext}>
                  Faça seu primeiro agendamento agora mesmo!
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    paddingTop: 66,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    height: 28,
    fontWeight: 'bold',
    color: "#94267e",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appointmentCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  checkIcon: {
    marginRight: 15,
  },
  appointmentDetails: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#333",
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  timeText: {
    fontSize: 14,
    color: "#666",
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    padding: 20,
  },
  noAppointmentsText: {
    fontSize: 20,
    height: 26,
    fontWeight: '600',
    color: "#94267e",
    marginTop: 15,
    textAlign: 'center',
  },
  noAppointmentsSubtext: {
    fontSize: 16,
    color: "#717171",
    marginTop: 10,
    height: 24,
    textAlign: 'center',
  },
});