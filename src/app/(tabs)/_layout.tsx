import { Tabs } from "expo-router"
import { Octicons, AntDesign, Fontisto } from "@expo/vector-icons"
import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"
import { theme } from "@/theme"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: theme.colors.color3,
      tabBarActiveTintColor: theme.colors.color5,
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
          tabBarIcon: ({ size, color }) =>
            <AntDesign name="home" size={size} color={color}
            />
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ size, color }) =>
            <Fontisto name="hipchat" size={size} color={color}
            />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ size, color }) => 
            <Octicons name="search" size={size} color={color}
            />
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  absoluteFill: {
    width: "100%",
    height: 50,
  }
})