import About from "../screens/about";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },

  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
