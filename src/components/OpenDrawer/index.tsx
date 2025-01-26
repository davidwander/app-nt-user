import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

interface BackButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
}

const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  style,
  iconColor = "white",
  iconSize = 32,
}) => {
  const router = useRouter();

  const handlePress = () => {
    // Open drawer instead of going back
    DrawerActions.openDrawer();
  };

  return (
    <TouchableOpacity
      style={[styles.backButton, style]}
      onPress={onPress || handlePress}
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
    borderRadius: 50,
    padding: 5,
  },
});

export default BackButton;