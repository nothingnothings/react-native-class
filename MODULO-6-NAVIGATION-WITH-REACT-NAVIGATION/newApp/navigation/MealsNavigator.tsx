import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '@/app/CategoriesScreen';
import CategoryMealsScreen from '@/app/CategoryMeals';
import MealDetailScreen from '@/app/MealDetailScreen';
import { Colors } from '@/constants/Colors';
import { Platform } from 'react-native';
import FavoritesScreen from '@/app/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen, // te deixa adicioar configurações extras.
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.dark,
          borderBottomColor: Colors.dark,
        },
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    // this is the stackConfig (things like header, headerTitle, etc.)
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#3b3b3b' : '#2b2b2b',
        borderBottomColor: Platform.OS === 'android' ? 'white' : 'black',
      },
    },
  }
);

// Tabs
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen,
});

// The tab navigator becomes the root navigator (contains the first stack, of meals, and the extra favorites screen).
export default createAppContainer(MealsFavTabNavigator); /// Basic setup.
