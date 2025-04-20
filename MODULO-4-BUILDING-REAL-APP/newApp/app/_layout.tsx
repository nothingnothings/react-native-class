import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

import { StyleSheet, View } from 'react-native';
import Header from '@/components/Header';

import StartGameScreen from '@/screens/StartGameScreen';
import GameScreen from '@/screens/GameScreen';
import React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [userNumber, setUserNumber] = React.useState(0);

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
