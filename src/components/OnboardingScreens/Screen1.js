import React from 'react'
import { View, Text, Button } from 'react-native'
import analytics from '@react-native-firebase/analytics';

const Screen1 = ({ navigation, route }) => {
  return (
    <View>
      <Text>
        This is screen 1
      </Text>
      <Text> Welcome {route.params.user.email || 'user'}</Text>
      <Button
        title='click me'
        onPress={() =>
          analytics().logEvent('generalevent', {        // it takes around an hour to log an event on firebase analytics.
            item: 'it worked',
          })
        }
      />
    </View>
  )
}

export default Screen1