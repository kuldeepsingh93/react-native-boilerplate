import React, { useEffect, useState } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth';

import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import PhoneSignIn from './OTPLogin';



const Login = ({ navigation }) => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    if (user) {
      console.log('user returned: ', user)
      setUser(user);
      if (initializing) setInitializing(false);
      navigation.navigate('screen1', { user: user })
    } else {
      ToastAndroid.show(`User not present. Please login.`, ToastAndroid.SHORT);
      if (initializing) setInitializing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber; // unsubscribe on unmount
  }, [])

  if (initializing) return null

  if (!user) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>
        <View style={{ height: 200, width: '80%', justifyContent: 'space-between' }}>
          <FacebookLogin navigation={navigation} />
          <GoogleLogin />
          <PhoneSignIn navigation={navigation} />
        </View>
      </View>
    )
  } else {
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    )
  }

}

export default Login