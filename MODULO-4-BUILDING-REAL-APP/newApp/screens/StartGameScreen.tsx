import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '@/components/Card';
import Input from '@/components/Input';

import Colors from '@/constants/Colors';

const StartGameScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number!</Text>
        <Input
          style={styles.input}
          keyboardType="number-pad"
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.resetButton]}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={[styles.button, styles.confirmButton]}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 15,
  },
  button: {
    width: '40%',
  },
  confirmButton: {
    backgroundColor: '#f7287b',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  resetButton: {
    backgroundColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});

export default StartGameScreen;
