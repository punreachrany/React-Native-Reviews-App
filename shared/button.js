import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const FlatButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <View>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default FlatButton;
