import { ImageBackground, Text } from "react-native";

export default function Payment(){
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/bg2.jpeg")}
    >
      <Text>Payment here</Text>
    </ImageBackground>
  )
}