import { ImageBackground, Text } from "react-native";

export default function Models(){
  return (
    <ImageBackground
      style={{ flex:1 }}
      source={require("../assets/images/bg2.jpeg")}
    >
      <Text>Models here</Text>
    </ImageBackground>
  )
}