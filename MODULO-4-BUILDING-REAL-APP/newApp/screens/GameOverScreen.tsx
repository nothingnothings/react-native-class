import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import BodyText from '@/components/BodyText';
import Card from '@/components/Card';

import SomeImage from '@/assets/images/some-image.png';

type GameOverScreenProps = {
  onRestartGame: () => void;
};

const GameOverScreen = (props: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <Image source={SomeImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: 300,
    maxWidth: '80%',
  },
  image: {
    width: 300,
    maxWidth: '80%',
    height: 300,
    marginTop: 20,
  },
});

export default GameOverScreen;
