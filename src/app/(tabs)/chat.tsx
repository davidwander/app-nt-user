import { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
  Image,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BackButton from "../../components/Goback";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useCameraPermissions } from "expo-camera"; // Importar o hook correto

const messagesData = [
  { id: "1", text: "Oi! Como posso te ajudar?", sender: "bot" },
  { id: "2", text: "Oi! Preciso agendar um horário.", sender: "user" },
];

type Message = {
  id: string;
  text?: string;
  imageUri?: string;
  sender: string;
};

export default function Chat() {
  const [permission, requestPermission] = useCameraPermissions();
  const status = permission ? permission.status : "undetermined"; // Correção aqui

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [messageText, setMessageText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Função para solicitar permissões da galeria
  const requestGalleryPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar a galeria é necessária!");
      return false;
    }
    return true;
  };

  // Função para enviar texto
  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        sender: "user",
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setMessageText("");
      Keyboard.dismiss();
    }
  };

  // Função genérica para lidar com imagens (galeria ou câmera)
  const handleImageAction = async (action: "camera" | "gallery") => {
    const hasPermission =
      action === "camera"
        ? status === "granted"
        : await requestGalleryPermission();

    if (!hasPermission) return;

    const result =
      action === "camera"
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });

    if (!result.canceled && result.assets && result.assets[0].uri) {
      const newMessage: Message = {
        id: Date.now().toString(),
        imageUri: result.assets[0].uri,
        sender: "user",
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }
  };

  // Abrir modal com a imagem
  const openImage = (uri: string | undefined) => {
    if (!uri) {
      alert("A imagem não pode ser exibida.");
      return;
    }
    setSelectedImage(uri);
    setModalVisible(true);
  };

  // Fechar modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  // Renderizar mensagem
  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View style={styles.messageWrapper}>
        <View
          style={[styles.messageBubble, isUser ? styles.userMessage : styles.botMessage]}
        >
          {item.text && <Text style={styles.messageText}>{item.text}</Text>}
          {item.imageUri && (
            <TouchableOpacity onPress={() => openImage(item.imageUri)}>
              <Image
                source={{ uri: item.imageUri || "" }}
                style={styles.messageImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/bg1.jpeg")}
      >
        <BackButton />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.chatContainer}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesList}
            inverted
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={() => handleImageAction("gallery")}
              style={styles.imageButton}
              accessibilityLabel="Selecionar imagem da galeria"
              accessible={true}
            >
              <FontAwesome name="image" size={20} color="#4caf50" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleImageAction("camera")}
              style={styles.imageButton}
              accessibilityLabel="Tirar foto"
              accessible={true}
            >
              <FontAwesome name="camera" size={20} color="#4caf50" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Digite sua mensagem"
              value={messageText}
              onChangeText={setMessageText}
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <FontAwesome name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/* Modal para exibir a imagem em tela cheia */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
              <FontAwesome name="close" size={30} color="white" />
            </TouchableOpacity>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.fullImage}
                resizeMode="contain"
              />
            )}
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: "#D3D3D3",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  chatContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  messagesList: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  messageWrapper: {
    marginVertical: 5,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 15,
    borderRadius: 20,
    position: "relative",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4caf50",
    padding: 20,
    borderBottomRightRadius: 0,
  },
  botMessage: {
    alignSelf: "flex-start",
    padding: 20,
    backgroundColor: "#e0e0e0",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  messageImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#4caf50",
    borderRadius: 20,
  },
  imageButton: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
  modalClose: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
