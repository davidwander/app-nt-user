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
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BackButton from "../../components/Goback";

const messagesData = [
  { id: "1", text: "Oi! Como posso te ajudar?", sender: "bot" },
  { id: "2", text: "Oi! Preciso agendar um horário.", sender: "user" },
];

type Message = {
  id: string;
  text: string;
  sender: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(messagesData);
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        sender: "user",
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]); // Inserir no início
      setMessageText("");
      Keyboard.dismiss();
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View style={styles.messageWrapper}>
        <View
          style={[
            styles.messageBubble,
            isUser ? styles.userMessage : styles.botMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
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
        >
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.messagesList}
            inverted
          />
          <View style={styles.inputContainer}>
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
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  userTriangle: {
    right: -10,
    top: 15,
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 0,
    borderTopWidth: 10,
    borderTopColor: "#4caf50",
  },
  botTriangle: {
    left: -10,
    top: 15,
    borderRightWidth: 10,
    borderRightColor: "transparent",
    borderLeftWidth: 0,
    borderTopWidth: 10,
    borderTopColor: "#e0e0e0",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
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
});
