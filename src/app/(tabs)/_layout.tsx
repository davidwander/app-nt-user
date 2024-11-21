import { Tabs } from "expo-router"
import { Octicons, AntDesign, Fontisto } from "@expo/vector-icons"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
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