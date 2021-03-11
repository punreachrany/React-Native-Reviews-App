import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const Header = (props) => {
  const openMenu = () => {
    // navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{props.children}</Text>
      </View>
    </View>
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
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    // borderWidth: 1,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default Header;
