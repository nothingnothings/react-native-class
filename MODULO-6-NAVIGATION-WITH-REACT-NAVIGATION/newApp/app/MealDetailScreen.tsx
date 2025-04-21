import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { Button } from 'react-native';

type CategoriesScreenProps = {
  onSelectCategory: (category: string) => void;
  navigation: any;
};

const MealDetailScreen = (props: CategoriesScreenProps) => {
  return (
    <View style={styles.screen}>
      <Button
        title="Go to Categories"
        onPress={() =>
          // skip 2 screens, directly to the parent screen:
          props.navigation.popToTop()
        }
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

export default MealDetailScreen;
