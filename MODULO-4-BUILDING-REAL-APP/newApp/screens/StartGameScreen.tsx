import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const StartGameScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number!</Text>
        <TextInput placeholder="Enter a number" />
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.resetButton]}>
            <Button title="Reset" onPress={() => {}} />
          </View>
          <View style={[styles.button, styles.confirmButton]}>
            <Button title="Confirm" onPress={() => {}} />
          </View>
        </View>
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
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    flex: 1,
    width: 300,
    maxWidth: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
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
