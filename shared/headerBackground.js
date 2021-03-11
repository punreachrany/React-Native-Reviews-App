import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const HeaderBackground = (props) => {
  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // // flex: 1,
    // elevation: 1,
  },
});

export default HeaderBackground;
