import { useRef } from "react";

import { Tabs } from "expo-router";
import BottomSheet from "@gorhom/bottom-sheet";

import {
  Octicons,
  Ionicons
} from "@expo/vector-icons";

import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";
import { theme } from "../../theme";

import { Menu } from "../../components/Menu";
import { CalendarCheck2, House, MessageSquareText, Search } from "lucide-react-native";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: theme.colors.color5,
        tabBarActiveTintColor: theme.colors.color3,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarBackground: () => (
          <BlurView intensity={80} tint="prominent" style={styles.absoluteFill} />
        )
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) =>
              <House
                size={29}
                color={color}
              />
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ color }) =>
              <CalendarCheck2
                size={30}
                color={color}
              />
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault()
              handleBottomSheetOpen()
            }
          })}
        />
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ color }) =>
              <MessageSquareText
                size={31}
                color={color}
              />
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => 
              <Search
                size={30}
                color={color}
              />
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  )
}

const styles = StyleSheet.create({
  absoluteFill: {
    width: "100%",
    height: 50,
  }
})