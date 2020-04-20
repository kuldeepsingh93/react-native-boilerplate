import React, { useEffect } from 'react'
import { Button } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

const GoogleLogin = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'AIzaSyCXD92bVkcjBdOhLLUaSc2FcdpsMrXDC8Y', // From Firebase Console Settings
      androidClientId: '59673982363-3m3fj87c5jdukm5iehn0kltf97h3j7pa.apps.googleusercontent.com'
    });

  }, [])


  async function onGoogleButtonPress() {
    console.log('i am running on google login function')
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log('idToken :', idToken)

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const handleSignIn = () => {
    onGoogleButtonPress()
      .then(() => {
        console.log('Signed in with google.')
      })
      .catch((err) => console.log('error while signing in with Google:', err))
  }

  return (
    <Button
      title="Google Sign-In"
      onPress={handleSignIn}
    />
  )


}

export default GoogleLogin