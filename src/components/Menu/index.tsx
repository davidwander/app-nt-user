import { forwardRef } from "react";
import { View, ImageBackground, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { MenuProps } from "./menu";
import { styles } from "./styles";

type RootStackParamList = {
  schedule: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "schedule">;

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  const navigation = useNavigation<NavigationProp>(); 

  const handleNavigate = () => {
    onClose?.(); 
    setTimeout(() => {
      
      navigation.navigate("schedule"); 
    }, 200);
  };

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 250]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <ImageBackground
        source={require("../../assets/images/bg2.jpeg")}
        style={styles.backgroundImage}
        imageStyle={styles.imageBackground}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <AntDesign
              name="close"
              size={26}
              onPress={onClose}
              style={styles.icon}
            />
            <View style={styles.iconContainer}>
              <AntDesign
                name="calendar"
                size={30}
                color="#000"
                onPress={handleNavigate} 
              />
              <Text style={styles.iconText}>Agendar</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </BottomSheet>
  );
});
