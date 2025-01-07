import { useEffect, useState, useRef } from "react"
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Animated,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native"
import { Fontisto, Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"
 
const { width } = Dimensions.get("window")

type NavigationProps = DrawerNavigationProp<any>

const images = [
  require("../../assets/photos/bohoBraids.jpeg"),
  require("../../assets/photos/boxBraidsChnl2.jpeg"),
  require("../../assets/photos/nagoMasc1.jpeg"),
  require("../../assets/photos/boxBraidsCachos.jpeg"),
  require("../../assets/photos/boxBraidsM.jpeg"),
  require("../../assets/photos/fulaniBraids.jpeg"),
  require("../../assets/photos/gipsyBraids.jpeg"),
  require("../../assets/photos/boxeadora.jpeg"),
  require("../../assets/photos/goddessBraids.jpeg"),
  require("../../assets/photos/twist.jpeg"),
  require("../../assets/photos/knotless1.jpeg"),
  require("../../assets/photos/nagoMasc2.jpeg"),
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NavigationProps>()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1800,
          delay: 2000,
          useNativeDriver: true,
        }).start();
    });
  }, [currentIndex]);

  const openInstagram = () => {
    const instagramUrl = "https://www.instagram.com/negas.do.tuim/";
    Linking.openURL(instagramUrl).catch((err) => {
      console.error("Erro ao abrir o link:", err);
    })
  }

  return (
    <ImageBackground
      source={require("../../assets/images/bg1.jpeg")}
      style={styles.background}
    >
      <View style={styles.header}>
        <Image source={require("@/assets/images/nt-logo.png")}
        style={styles.imageHeader}
        />
      </View>
      <View style={styles.carouselContainer}>
        <Animated.Image
          source={images[currentIndex]}
          style={[styles.image, { opacity: fadeAnim}]}
        />
      </View>
      <View style={styles.footer}>
        <Fontisto
          name="instagram"
          size={40}
          color="white"
          onPress={openInstagram}
        />
      </View>
      <TouchableOpacity
        style={styles.drawerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Feather
          name="menu"
          size={38}
          color="white"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselContainer: {
    width,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width,
    height: 350,
  },
  imageHeader: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerButton: {
    position: "absolute",
    top: 62,
    left: 8,
  }
});
