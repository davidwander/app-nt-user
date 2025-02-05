import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import { ChartNoAxesGantt } from "lucide-react-native";

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
      <ChartNoAxesGantt size={iconSize} color={iconColor} />
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
    borderRadius: 50,
    padding: 5,
  },
});

export default BackButton;
