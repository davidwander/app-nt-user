import { Slot } from "expo-router"
import { StatusBar, StyleSheet, ImageBackground, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import * as SplashScreen from "expo-splash-screen"

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItemList
} from "@react-navigation/drawer"

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins"

SplashScreen.preventAutoHideAsync()
const Drawer = createDrawerNavigator()

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <ImageBackground
      source={require("../assets/images/bg2.jpeg")}
      style={styles.background}
    >
      <View style={styles.drawerContent}>
        <DrawerItemList {...props} />
      </View>
    </ImageBackground>
  )
}

function RenderSlot() {
  return <Slot />
}

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
          initialRouteName="Profile"
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: "transparent",
            }
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Profile"
            component={RenderSlot}
          />
          <Drawer.Screen
            name="Chat"
            component={RenderSlot}
          />
          <Drawer.Screen
            name="Search"
            component={RenderSlot}
          />
          <Drawer.Screen
            name="Scheduling"
            component={RenderSlot}
          />
        </Drawer.Navigator>
      )}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  drawerContent: {
    flex: 1,
    padding: 28,
  },
  drawerItem: {
    
  }
})