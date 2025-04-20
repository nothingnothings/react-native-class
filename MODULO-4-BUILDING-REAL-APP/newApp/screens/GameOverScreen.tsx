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
      <View style={styles.imageContainer}>
        <Image source={SomeImage} style={styles.image} />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
