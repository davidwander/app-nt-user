import { forwardRef } from "react";
import { View, ImageBackground, Text } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { MenuProps } from "./menu";
import { styles } from "./styles";
import { BadgeDollarSign, Calendar, Images, Minimize2, X } from "lucide-react-native";

type RootStackParamList = {
  schedule: undefined;
  models: undefined;
  payment: undefined;
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
            <Minimize2
              size={30}
              color="#000"
              onPress={onClose}
              style={styles.icon}
            />
            <View style={styles.iconContainer}>
              <Calendar
                size={35}
                color="#000"
                onPress={handleNavigate} 
              />
              <Text style={styles.iconText}>Agendar</Text>
              
                <Images
                  size={35}
                  color="#000"
                  onPress={() => navigation.navigate("models")}
                />
                <Text style={styles.iconText}>Modelos</Text>
              
                <BadgeDollarSign
                  size={38}
                  color="#000"
                  onPress={() => navigation.navigate("payment") }
                />
                <Text>Sinal</Text>
              
            </View>
          </View>
        </View>
      </ImageBackground>
    </BottomSheet>
  );
});
