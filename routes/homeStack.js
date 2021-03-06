import About from "../screens/about";
import Header from "../shared/header";
import HeaderBackground from "../shared/headerBackground";
import HeaderLeft from "../shared/headerLeft";
import Home from "../screens/home";
import { ImageBackground } from "react-native";
import React from "react";
import ReviewDetails from "../screens/reviewDetails";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerBackground: () => <HeaderBackground />,

        headerTitle: () => <Header>Game Zone</Header>,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      };
    },
  },
  // About: {
  //   screen: About,
  // },

  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      headerBackground: () => <HeaderBackground />,
      headerTitle: () => <Header>Review Details</Header>,
      // headerLeft: () => <HeaderLeft />,
    },
    // navigationOptions: {
    //   title: "Review Details",
    //   // headerStyle: {
    //   //   backgroundColor: "#eee",
    //   // },
    // },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  },
});

// export default createAppContainer(HomeStack);
export default HomeStack;
