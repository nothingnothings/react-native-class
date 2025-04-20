import React from 'react';
import { StyleSheet, Text } from 'react-native';

type BodyTextProps = {
  children: React.ReactNode;
  style?: any;
};

const BodyText = (props: BodyTextProps) => {
  return <Text style={[styles.bodyText, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
});

export default BodyText;
