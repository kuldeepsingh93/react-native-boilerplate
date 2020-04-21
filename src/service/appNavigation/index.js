import React, { useRef, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import analytics from '@react-native-firebase/analytics';

import Login from '../../components/login'
import Screen1 from '../../components/OnboardingScreens/Screen1'
import Screen2 from '../../components/OnboardingScreens/Screen2'

const Stack = createStackNavigator();

const getActiveRouteName = state => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }
  return route.name;
};

const AppContainer = () => {

  const routeNameRef = useRef();
  const navigationRef = useRef();


  useEffect(() => {
    const state = navigationRef.current.getRootState();
    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, []);


  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          // The line below uses the @react-native-firebase/analytics tracker
          // Change this line to use another Mobile analytics SDK
          analytics().setCurrentScreen(currentRouteName, currentRouteName);
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator initialRouteName="signIn">
        <Stack.Screen name="signIn" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="screen1" component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name="screen2" component={Screen2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer