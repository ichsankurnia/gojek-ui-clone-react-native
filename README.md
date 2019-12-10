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