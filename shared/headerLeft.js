import { StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const HeaderLeft = (props) => {
  const openMenu = () => {
    props.navigation.openDrawer();
  };

  return (
    <MaterialIcons
      name="menu"
      size={28}
      onPress={openMenu}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 16,
    // borderWidth: 1,
  },
});

export default HeaderLeft;
