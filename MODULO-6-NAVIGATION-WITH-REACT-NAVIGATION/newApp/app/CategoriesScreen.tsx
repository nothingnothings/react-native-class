import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';

type CategoriesScreenProps = {
  onSelectCategory: () => void;
  navigation: any;
};

const CategoriesScreen = (props: CategoriesScreenProps) => {
  const { navigate } = props.navigation;

  const onSelectCategory = () => {
    navigate('CategoryMeals');
  };

  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          onSelectCategory('breakfast');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default CategoriesScreen;
