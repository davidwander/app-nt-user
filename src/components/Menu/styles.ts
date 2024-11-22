import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {},
  content: {
    width: "100%",
    height: 300,
    backgroundColor: theme.colors.color5,
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 20
  }
})