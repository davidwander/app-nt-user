import { Slot } from "expo-router"
import { StatusBar, StyleSheet, ImageBackground, View, Image } from "react-native"
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
        <View style={styles.avatarContainer}>
          <Image  
            source={require("../assets/images/nt-logo.png")}
            style={styles.avatar}
          />
        </View>
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
            name="MyAppointments"
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#7f486f",
    borderWidth: 2,
    borderColor: "#fff",
  }
})