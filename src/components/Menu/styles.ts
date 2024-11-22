import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.color5,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  header: {
    flexDirection: "row",
  },
  icon: {
    justifyContent: "flex-end",
  }
})