import React, { useEffect, useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import messaging from '@react-native-firebase/messaging'

import AppContainer from './src/service/appNavigation'

const App = () => {

  const [notificationToken, setNotificationToken] = useState('')
  useEffect(() => {
    SplashScreen.hide()
    registerAppWithFCM()

  }, [])

  async function registerAppWithFCM() {
    await messaging().registerDeviceForRemoteMessages();
    if (notificationToken === '') {
      let fcmToken = await messaging().getToken();
      setNotificationToken(fcmToken)
      console.log('fcmToken : ', fcmToken)
    } else console.log('notification token already present.')
  }

  return (
    <>
      <AppContainer />
    </>
  )
}

export default App