import Colors from '@/constants/Colors';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native';

type MainButtonProps = {
  onPress: () => void;
  children: string;
};

const MainButton = (props: MainButtonProps) => {
  let ButtonComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={() => props.onPress()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
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
