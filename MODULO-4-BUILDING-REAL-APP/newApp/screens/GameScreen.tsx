import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
} from 'react-native';

import NumberContainer from '@/components/NumberContainer';
import Card from '@/components/Card';

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

  const currentLow = React.useRef(1);
  const currentHigh = React.useRef(100);

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    } else {
      if (direction === 'lower') {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      const nextNumber = generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );

      setCurrentGuess(nextNumber);
    }
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            nextGuessHandler('lower');
          }}
        />
        <Button
          title="GREATER"
          onPress={() => {
            nextGuessHandler('greater');
          }}
        />

        <View style={styles.list}>
          <ScrollView>
            {pastGuesses.map((guess) => renderListItem(guess))}
          </ScrollView>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
