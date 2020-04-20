import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      let isCodeConfirmed = await confirm.confirm(code);
      console.log('isCodeConfirmed', isCodeConfirmed)

    } catch (error) {
      console.log('error :', error)
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <>
        <TextInput value={phoneNumber} onChangeText={text => setPhoneNumber(text)} />
        <Button
          title="Phone Number Sign In"
          onPress={signInWithPhoneNumber}
        />
      </>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneSignIn