import About from "../screens/about";
import Header from "../shared/header";
import HeaderBackground from "../shared/headerBackground";
import HeaderLeft from "../shared/headerLeft";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerBackground: () => <HeaderBackground />,
        headerTitle: () => <Header>About</Header>,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  },
});

// export default createAppContainer(HomeStack);
export default AboutStack;
