import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyles, images } from "../styles/global";

import Card from "../shared/card";

const ReviewDetails = (props) => {
  const pressHandler = () => {
    props.navigation.goBack();
  };

  const rating = props.navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{props.navigation.getParam("title")}</Text>
        {/* <Text>{props.navigation.getParam("rating")}</Text> */}
        {/* <Text>{props.navigation.getParam("body")}</Text> */}
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>

      <Button title="Back to homescreen" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
export default ReviewDetails;
