import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  imageBackground: {
    borderRadius: 20,
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