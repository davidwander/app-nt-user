import { forwardRef } from  "react"
import { View, ImageBackground } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import { AntDesign } from  "@expo/vector-icons"


import { MenuProps } from "./menu"
import { styles } from "./styles"

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
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
              name="down"
              size={26}
              onPress={onClose}
              style={styles.icon}
            />
          </View>
        </View>
      </ImageBackground>
    </BottomSheet>
  )
})