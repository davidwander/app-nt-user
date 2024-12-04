import React, { useState } from "react";
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
import { theme } from "../../theme";


const messagesData = [
  { id: "1", text: "Oi! Como posso te ajudar?", sender: "bot" },
  { id: "2", text: "Oi! Preciso agendar um horário.", sender: "user" },
];

type Message = {
  id: string;
  text: string;
  sender: string;
}

export default function Chat() {
  const [messages, setMessages] = useState(messagesData);
  const [messageText, setMessageText] = useState("");

  const handleSend = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: messageText,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageText("");
      Keyboard.dismiss();
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          item.sender === "user" ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/bg1.jpeg")} 
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.chatContainer}
        >
          <FlatList<Message>
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[
              styles.messagesList,
              {
                paddingBottom: 80,
                paddingTop: messages.length > 60 ? 10 : 60,
              },
            ]}
            ListFooterComponent={<View style={{ height: 50 }} />}
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
              <FontAwesome name="send" size={24} color="white" />
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
    justifyContent: "flex-end", 
    paddingBottom: 80, 
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderColor: "#ddd",
    elevation: 8, 
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#D3D3D3",
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  botMessage: {
    alignSelf: "flex-start", 
    backgroundColor: "#e1e1e1", 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  messageText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  inputContainer: {
    borderTopLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    backgroundColor: "#D3D3D3",
    borderTopColor: "#D3D3D3",
    position: "absolute", 
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10, 
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: "#f9f9f9", 
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: theme.colors.color5, 
    borderRadius: 25,
  },
});
