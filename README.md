<h1>React Native 0.60</h1>

<h4>Installation</h4>
Windows PowerShell (Run as Administrator):
`Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

`choco install yarn`
`choco install nodejs.install --version 11.15.0`
`choco install -y python2 jdk8`

Command Line (Run as Administrator):
`npm install -g react-native-cli`
`react-native init <project name> --version react-native@0.57`
`react-native run-android`

SDK:
Android version 27 or 8.1.0 (opt: Emulator Nexus 5X API 27 Oreo)
adb -s <device name> reverse tcp:8081 tcp:8081
adb -s 2141c4577cf4 reverse tcp:8081 tcp:8081
check device name = adb devices

<h5>Build android<h5>
#React-Native 0.59
`react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res`

#React-Native 0.49.0+
`react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug`

#React-Native 0-0.49.0
`react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug`

`$ cd android`
#Create debug build:
`$ ./gradlew assembleDebug`
#Create release build:
`$ ./gradlew assembleRelease #Generated 'apk' will be located at 'android/app/build/outputs/apk'`


<h4>React Navigation</h4>
yarn add react-navigation
yarn add react-navigation-stack

yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23

yarn add react-native-webview

add dependencies android/app/build.gradle:
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

add MainActivity.java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}


<h4>React Native Camera</h4>
yarn add react-native-camera --save
react-native link react-native-camera

android/settings.gradle:
include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir,     '../node_modules/react-native-camera/android')

android/app/build.gradle
implementation project(':react-native-camera')

android/app/src/main/AndroidManifest.xml
<!-- Required -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Include this only if you are planning to use the camera roll -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- Include this only if you are planning to use the microphone for video recording -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>

android/app/build.gradle:
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
  }
}

android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'mlkit' // <--- replace general with mlkit
  }
}