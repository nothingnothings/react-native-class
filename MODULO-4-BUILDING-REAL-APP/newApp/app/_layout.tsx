import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

import { StyleSheet, View } from 'react-native';
import Header from '@/components/Header';

import StartGameScreen from '@/screens/StartGameScreen';
import GameScreen from '@/screens/GameScreen';
import React from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function RootLayout() {
  const [userNumber, setUserNumber] = React.useState(0);

  const [dataLoaded, setDataLoaded] = React.useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.appContainer}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
