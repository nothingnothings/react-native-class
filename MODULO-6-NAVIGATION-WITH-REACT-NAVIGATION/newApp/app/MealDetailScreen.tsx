import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { Button } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '@/components/HeaderButton';


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

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons
        HeaderButtonComponent={HeaderButton} /// EIS O CÓDIGO EM QUESTÃO.
      >
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('MARK AS FAVORITE');
          }}
        />
      </HeaderButtons>
    ),
  };
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
