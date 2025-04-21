import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '@/app/CategoriesScreen';
import CategoryMealsScreen from '@/app/CategoryMeals';
import MealDetailScreen from '@/app/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen, // te deixa adicioar configurações extras.
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator); /// Basic setup.
