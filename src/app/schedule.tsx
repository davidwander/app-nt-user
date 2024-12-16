import { useState } from "react";
import { 
  ImageBackground, 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  Pressable 
} from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ptBR } from "../utils/localeCalendarConfig";

import { theme } from "../theme";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

const availableTimes = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

export default function Schedule() {
  const navigation = useNavigation();
  const [day, setDay] = useState<DateData>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    setModalVisible(false);
    // Aqui você pode adicionar a lógica para salvar ou enviar os dados do agendamento
    console.log(`Agendamento confirmado: ${day?.dateString} às ${selectedTime}`);
  };

  return (
    <ImageBackground
      style={styles.background}
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
        <Calendar
          style={styles.calendar}
          renderArrow={(direction: "right" | "left") => (
            <Feather size={24} color="#94267e" name={`chevron-${direction}`} />
          )}
          headerStyle={{
            borderBottomWidth: 0.5,
            borderBottomColor: "black",
            paddingBottom: 10,
            marginBottom: 10,
          }}
          theme={{
            textMonthFontSize: 22,
            todayTextColor: "#94267e",
            selectedDayBackgroundColor: "#94267e",
            selectedDayTextColor: "white",
            arrowColor: "#94267e",
            calendarBackground: "transparent",
            textDayStyle: { color: "#94267e" },
            textSectionTitleColor: "#94267e",
            textDisabledColor: "#717171",
            arrowStyle: {
              margin: 0,
              padding: 0,
            },
          }}
          minDate={new Date().toISOString().split("T")[0]}
          hideExtraDays
          onDayPress={(day: DateData) => {
            setDay(day);
            setSelectedTime(null); // Reset selected time when a new day is chosen
          }}
          markedDates={
            day
              ? {
                  [day.dateString]: { selected: true },
                }
              : {}
          }
        />

        {day && (
          <View style={styles.timeSelection}>
            <Text style={styles.subtitle}>
              Escolha um horário:
            </Text>
            <FlatList
              data={availableTimes}
              keyExtractor={(item) => item}
              numColumns={3} // Exibe os horários em 3 colunas
              columnWrapperStyle={styles.columnWrapper} // Estilo entre as colunas
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.timeButton,
                    selectedTime === item && styles.selectedTimeButton,
                  ]}
                  onPress={() => {
                    setSelectedTime(item);
                    setModalVisible(true); // Abre o modal após a seleção
                  }}
                >
                  <Text
                    style={[
                      styles.timeButtonText,
                      selectedTime === item && styles.selectedTimeButtonText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirme seu agendamento</Text>
              <Text style={styles.modalText}>
                Dia: {day ? new Date(
                  day.dateString).toLocaleDateString("pt-BR") : ""}{"\n"}
                Horário: {selectedTime}
              </Text>

              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={handleConfirm}
                >
                  <Text style={styles.buttonText}>Confirmar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  calendar: {
    width: "100%",
    marginTop: 40,
    borderRadius: 10,
  },
  timeSelection: {
    marginTop: 22,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#94267e",
    textAlign: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timeButton: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#94267e",
    backgroundColor: "white",
    alignItems: "center",
  },
  selectedTimeButton: {
    backgroundColor: "#94267e",
  },
  timeButtonText: {
    color: "#94267e",
    fontSize: 16,
  },
  selectedTimeButtonText: {
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#94267e",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  confirmButton: {
    backgroundColor: "#94267e",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
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
});
