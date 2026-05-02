import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  AppContainer: {
    padding: 50,
    backgroundColor: "#311b6b",
  },
  inputContainer: {
    flexDirection: "center",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    width: "80%",
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    color: "#120438",
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 10,
  },
});
