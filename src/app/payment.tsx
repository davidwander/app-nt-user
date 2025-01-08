import { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import BackButton from "../components/Goback";
import { theme } from "../theme";

// Formas de pagamento
const paymentMethods = [
  { id: "1", method: "Cartão de Crédito" },
  { id: "2", method: "Pix" },
  { id: "3", method: "Dinheiro" },
];

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert("Erro", "Por favor, selecione um método de pagamento.");
      return;
    }

    Alert.alert(
      "Pagamento realizado!",
      `Você selecionou: ${selectedMethod}. Obrigado!`
    );
  };

  const renderMethod = ({ item }: { item: { id: string; method: string } }) => (
    <TouchableOpacity
      style={[
        styles.paymentOption,
        selectedMethod === item.method && styles.selectedOption,
      ]}
      onPress={() => setSelectedMethod(item.method)}
    >
      <Text style={styles.methodText}>{item.method}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/bg2.jpeg")}
    >
      <BackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Selecione o método de pagamento</Text>

        <FlatList
          data={paymentMethods}
          renderItem={renderMethod}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Finalizar Pagamento</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
    paddingTop: 16,
  },
  list: {
    flexGrow: 0,
    marginBottom: 20,
  },
  paymentOption: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  selectedOption: {
    borderColor: theme.colors.color5,
  },
  methodText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  payButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
