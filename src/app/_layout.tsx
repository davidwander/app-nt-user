import { Slot } from "expo-router"
import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as SplashScreen from "expo-splash-screen"

import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./(tabs)/index"

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins"

SplashScreen.preventAutoHideAsync()
const Drawer = createDrawerNavigator()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      {fontsLoaded && (
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Home" component={Slot} />
        </Drawer.Navigator>
      )}
    </GestureHandlerRootView>
  )
}