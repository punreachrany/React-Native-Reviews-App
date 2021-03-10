import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default Home;
