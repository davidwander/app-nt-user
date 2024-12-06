import { StyleSheet } from "react-native"
import { theme } from "../../theme"

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
  },
  iconContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  iconButton: {
    alignItems: "center"
  },
  iconText: {
    fontSize: 16,
    fontFamily: theme.fontFamily.medium
  }
})