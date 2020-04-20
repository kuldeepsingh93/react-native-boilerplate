import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import AppContainer from './src/service/appNavigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <>
      <AppContainer />
    </>
  )
}

export default App