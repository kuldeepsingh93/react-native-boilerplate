import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Login from '../../components/login'
import Screen1 from '../../components/OnboardingScreens/Screen1'
import Screen2 from '../../components/OnboardingScreens/Screen2'


const AppNavigator = createStackNavigator({
  signIn: {
    screen: Login,
    navigationOptions: { headerShown: false }
  },
  screen1: {
    screen: Screen1,
    navigationOptions: { headerShown: false }
  },
  screen2: {
    screen: Screen2,
    navigationOptions: { headerShown: false }
  },
},
  {
    initialRouteName: 'signIn'
  });

const AppContainer = createAppContainer(AppNavigator);



export default AppContainer