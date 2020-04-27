<h1>react-native-boilerplate</h1>

A react-native repo with all the necessary firebase services and other functionalities integrated to give you a head start while starting something new.

<h1>Motivation</h1>
This repo is build with the focus on saving time while starting with a new project. It has all the necessary firebase services and other functionalities integrated which are needed in almost all the projects. This repo will, in turn, save a lot of time while developing something new. It is open source so can be improved and made better with time.

<h1>Integrations</h1>

**FIREBASE**

1. Facebook Login 
2. Google / Gmail Login
3. Phone No. / OTP Login
4. Receiving and Handling push notifications
5. Google Analytics

**OTHER INTEGRATIONS**

1. Splash Screen
2. Dummy Onboarding screens
3. Unit Testing

<h1>To-Do</h1>

  - [x] Facebook Login
  - [x] Phone No. / OTP Login
  - [x] Push Notifications
  - [x] Google Analytics
  - [x] Splash Screen
  - [x] Dummy Onboarding Screens
  - [ ] Unit Testing
  - [ ] Google Login (an issue is remaining to be resolved)

<h1>Installation Guide</h1>

After cloning this repo for a new project, the following changes are recommended before starting futher development.

1. **Changing Package Name**

   * In ```android/app/src/main/java/MainActivity.java``` change the first line ```package com.react_native_firebase_boilerplate;``` to the desired package name ```package com.***************```.
   * Now change the package name in  ```android/app/src/main/java/MainApplication.java``` in the similar fashion as done above.
   * Now navigate to ```android/app/src/main/AndroidManifest.xml``` file and change the package name to the desired name as done before in ```MainActivity.java``` file.
   * Now navigate to ```android/app/build.gradle``` file and do the following changes - 
    ```shell
    android {
      ...
      defaultConfig {
        ...
        applicationId "com.react_native_firebase_boilerplate" //change this package name to the desired name.
      }
    }
    ```
    * Navigate to ```android/app/BUCK``` and change the package name in ```android_build_config{}``` and ```android_resource()``` as required.
    * Lastly change the folder structure inside ```android/app/src/main``` by replacing ```android/app/src/main/java/com/OLD_APP_ID``` with ```android/app/src/main/java/com/NEW_APP_ID``` for e.g - 
    
      Suppose old package name was ```com.myPackage``` and it has to be updated with ```com.abc.myNewPackage```, so the folder structure inside ```android/app/src/main``` will be updated from ```android/app/src/main/java/com/myPackage``` to ```android/app/src/main/java/com/abc/myNewPackage```
    
2. **Changing App Name**
   
   For changing app name navigate to ```app.json``` file located in the project root folder and change the ```"displayName"``` as required.


3. **Adding your App to Firebase Project Setting**

   You need to add your updated app to the firebase project settings and add the ```SHA 1 certificate fingerprint``` to it which can be obtained from the other app already added their ```com.react_native_firebase_boilerplate``` and finally download the updated ```google-services.json``` file from the firebase settings and add it to the ```android/app``` folder in the project structure replacing the old file already added there.
   
4. **Building the App**

   After all these changes, run ```./gradlew clean``` inside ```android``` folder and then try to build the app. Everything should smooth.
   In case you get any error while logging in via Facebook, then you might have to update the package name inside ```Facebook Developer Console``` with the new package name.
   
**That's all! You are good to go.**


