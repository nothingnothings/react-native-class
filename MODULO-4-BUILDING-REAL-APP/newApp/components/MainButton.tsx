import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MainButtonProps = {
  onPress: () => void;
  children: string;
};

const MainButton = (props: MainButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => props.onPress()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'open-sans',
  },
});

export default MainButton;
