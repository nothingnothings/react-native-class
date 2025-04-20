import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

type GameScreenProps = {
  userChoice: number;
};

const GameScreen = (props: GameScreenProps) => {
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default GameScreen;
