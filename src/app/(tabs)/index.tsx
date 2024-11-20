import { useEffect, useState, useRef } from "react";
import { theme } from "@/theme";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  Image,
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
  const flatListRef = useRef<FlatList<any>>(null);

  // Intervalo para troca automática de imagens no carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  // Atualiza o índice do carrossel
  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
    });
  }, [currentIndex]);

  return (
    <ImageBackground
      source={require("../../assets/images/bg1.jpeg")}
      style={styles.background}
    >
      <View style={styles.carouselContainer}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          keyExtractor={(_, index) => index.toString()}
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
    borderRadius: 10,
  },
});
