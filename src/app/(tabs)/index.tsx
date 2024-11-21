import { useEffect, useState, useRef } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        delay: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentIndex]);

  return (
    <ImageBackground
      source={require("../../assets/images/bg1.jpeg")}
      style={styles.background}
    >
      <View style={styles.carouselContainer}>
        <Animated.Image
          source={images[currentIndex]}
          style={[styles.image, { opacity: fadeAnim}]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
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
    resizeMode: "cover",
  },
});
