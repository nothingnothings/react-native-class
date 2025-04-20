import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Modal } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

type GoalInputProps = {
  onAddGoal: (text: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  //   enteredGoalText: string;
};

const GoalInput = (props: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredGoal: string) => {
    setEnteredGoalText(enteredGoal);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  const cancelHandler = () => {
    setEnteredGoalText('');
    props.setModalVisible(false);
  };

  return (
    <Modal visible={props.modalVisible} transparent animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => goalInputHandler(text)}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => cancelHandler()}
            />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={() => addGoalHandler()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    marginBottom: 10,
    padding: 8,
  },
});

export default GoalInput;
