import React from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

function FacebookLogin(props) {


  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    console.log('data and access token:', data)

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const handleSignIn = () => {
    onFacebookButtonPress()
      .then(() => {
        console.log('signed in with facebook')
        props.navigation.navigate('screen1')
      })
      .catch((err) => console.log('err: ', err))
  }

  return (
    <Button
      title="Sign-In with Facebook"
      onPress={handleSignIn}
    />
  );

}

export default FacebookLogin