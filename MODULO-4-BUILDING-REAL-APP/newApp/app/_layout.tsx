import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';

import { StyleSheet, View } from 'react-native';
import Header from '@/components/Header';

import StartGameScreen from '@/screens/StartGameScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View style={styles.appContainer}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
