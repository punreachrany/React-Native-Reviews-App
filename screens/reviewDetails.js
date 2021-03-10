import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { globalStyles } from "../styles/global";

const ReviewDetails = (props) => {
  const pressHandler = () => {
    props.navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Text>{props.navigation.getParam("title")}</Text>
      <Text>{props.navigation.getParam("rating")}</Text>
      <Text>{props.navigation.getParam("body")}</Text>
      <Button title="Back to homescreen" onPress={pressHandler} />
    </View>
  );
};

export default ReviewDetails;
