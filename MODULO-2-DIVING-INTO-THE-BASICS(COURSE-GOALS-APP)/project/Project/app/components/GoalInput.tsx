import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Modal } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

type GoalInputProps = {
  goalInputHandler: (text: string) => void;
  onAddGoal: (text: string) => void;
  modalVisible: boolean;
  //   enteredGoalText: string;
};

const GoalInput = (props: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  return (
    <Modal visible={props.modalVisible} transparent animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => props.goalInputHandler(text)}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button
          title="Add Goal"
          onPress={() => props.onAddGoal(enteredGoalText)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
