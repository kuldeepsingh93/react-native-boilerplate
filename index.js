/**
 * @format
 */
import { AppRegistry } from 'react-native';
// import messaging from '@react-native-firebase/messaging'
import App from './App';
import { name as appName } from './app.json';

// messaging().setBackgroundMessageHandler(async remoteMessage => {             // can be called to handle notification data 
//  console.log('Message handled in the background!', remoteMessage);           // when the app is in the background or killed state.
// });


// messaging().onMessage(async remoteMessage => {                                    // can be called to handle incoming notification data when the 
//   alert('A new FCM message arrived!', JSON.stringify(remoteMessage));      // app is in the foreground.
// });


AppRegistry.registerComponent(appName, () => App);
