import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';

import CATEGORIES from '@/data/dummy-data';

type CategoriesScreenProps = {
  onSelectCategory: () => void;
  navigation: any;
};

const CategoryMealsScreen = (props: CategoriesScreenProps) => {
  const categoryId = props.navigation.getParam('categoryId');

  const categoryMealData = CATEGORIES.filter((item) => item.id === categoryId);

  return (
    // <View style={styles.screen}>
    //   <Text>Category Meals Screen</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       props.navigation.navigate('MealDetail');
    //     }}
    //   />
    // </View>

    <View>
      <Text>{categoryMealData[0].title}</Text>
      <Text>{categoryMealData[0].color}</Text>
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

export default CategoryMealsScreen;
