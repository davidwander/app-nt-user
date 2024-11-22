import { forwardRef } from  "react"
import { View, Text } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"
import { Fontisto } from  "@expo/vector-icons"


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
      <View style={styles.content}>
        <View style={styles.header}>
          <Fontisto
            name="close"
            size={24}
            onPress={onClose}
            style={styles.icon}
          />
        </View>
      </View>
    </BottomSheet>
  )
})