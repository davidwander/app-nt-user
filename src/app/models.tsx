import { useState } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import BackButton from "../components/Goback";
import { fontFamily } from "../theme/fontFamily";

// Array de modelos de cabelo
const hairModels = [
  { id: "1", image: require("../assets/photos/bohoBraids.jpeg"), title: "BohoBraids" },
  { id: "2", image: require("../assets/photos/boxBraidsCachos.jpeg"), title: "BoxBraidsCachos" },
  { id: "3", image: require("../assets/photos/boxBraidsChnl2.jpeg"), title: "BoxBraids Chanel" },
  { id: "4", image: require("../assets/photos/boxBraidsM.jpeg"), title: "BoxBraids médio" },
  { id: "5", image: require("../assets/photos/boxeadora.jpeg"), title: "Boxeadora" },
  { id: "6", image: require("../assets/photos/fulaniBraids.jpeg"), title: "FulaniBraids" },
  { id: "7", image: require("../assets/photos/gipsyBraids.jpeg"), title: "Gipsy braids" },
  { id: "8", image: require("../assets/photos/goddessBraids.jpeg"), title: "Goddess braids" },
  { id: "9", image: require("../assets/photos/knotless1.jpeg"), title: "Knotless" },
  { id: "10", image: require("../assets/photos/nagoMasc1.jpeg"), title: "Nago masculino" },
  { id: "11", image: require("../assets/photos/nagoMasc2.jpeg"), title: "Nago masculino" },
  { id: "12", image: require("../assets/photos/twist.jpeg"), title: "Twist" },
];

export default function Models() {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const renderItem = ({ item }: { item: { id: string; image: any; title: string } }) => (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedImage(item.image)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground style={styles.background} source={require("../assets/images/bg2.jpeg")}>
      <BackButton />
      <View style={styles.content}>
        <Text style={styles.title}>Modelos de Cabelos</Text>
        <FlatList
          data={hairModels}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          numColumns={2} // Mostra dois modelos por linha
        />

        {selectedImage && (
          <Modal
            transparent={true}
            animationType="fade"
            onRequestClose={() => setSelectedImage(null)}
          >
            <View style={styles.modalBackground}>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setSelectedImage(null)}
              >
                <Text style={styles.closeText}>Fechar</Text>
              </TouchableOpacity>
              <Image source={selectedImage} style={styles.fullImage} />
            </View>
          </Modal>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: fontFamily.bold,
    color: "#fff",
    textAlign: "center",
    marginVertical: 16,
    paddingTop: 16,
  },
  list: {
    justifyContent: "center",
    paddingBottom: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    padding: 8,
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalClose: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 20,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  fullImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
});
