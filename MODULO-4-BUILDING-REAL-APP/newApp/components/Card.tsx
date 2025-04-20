import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: any;
};

const Card = (props: CardProps) => {
  return (
    <View
      style={{
        ...styles.card,
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6, // ONLY ON IOS
    shadowOpacity: 0.26,
    elevation: 6, // ONLY ON ANDROID (same as shadow properties, but simpler)...
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;
