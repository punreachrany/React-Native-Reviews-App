import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/home";
import Navigator from "./routes/homeStack";
import React from "react";

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
