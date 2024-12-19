import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface BackButtonProps {
  onPress?: () => void; // Função personalizada ao clicar
  style?: ViewStyle; // Estilo personalizado do botão
  iconColor?: string; // Cor do ícone
  iconSize?: number; // Tamanho do ícone
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  style,
  iconColor = "white",
  iconSize = 32,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.backButton, style]}
      onPress={onPress || (() => router.back())} // Ação padrão: voltar
    >
      <Feather name="chevron-left" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 35,
    left: 8,
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 5,
  },
});

export default BackButton;
