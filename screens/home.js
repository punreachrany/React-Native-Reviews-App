import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { globalStyles } from "../styles/global";

// import { TouchableOpacity } from "react-native-gesture-handler";

// import { FlatList } from "react-native-gesture-handler";

const Home = (props) => {
  // const pressHandler = () => {
  //   props.navigation.navigate("ReviewDetails");
  // };
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gptta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 5,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default Home;
