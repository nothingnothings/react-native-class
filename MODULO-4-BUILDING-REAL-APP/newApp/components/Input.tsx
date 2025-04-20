import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type InputProps = {
  style?: any;
  keyboardType?: any;
  placeholder?: string;
  blurOnSubmit?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  maxLength?: number;
  onChangeText?: (text: string) => void;
  value?: string;
};

const Input = (props: InputProps) => {
  return (
    <TextInput
      {...props}
      style={{
        ...styles.input,
        ...props.style,
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
