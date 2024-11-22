import { forwardRef } from  "react"
import { View, Text } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"

import { MenuProps } from "./menu"
import { BlurView } from 'expo-blur';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 250]}
    >
      <View>
        <Text>Fazer agendamento</Text>
      </View>
    </BottomSheet>
  )
})