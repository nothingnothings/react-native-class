import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Colors from '@/constants/Colors';

import CATEGORIES from '@/data/dummy-data';
import Category from '@/models/category';

type CategoriesScreenProps = {
  onSelectCategory: () => void;
  navigation: any;
};

const CategoriesScreen = (props: CategoriesScreenProps) => {
  const { navigate } = props.navigation;

  const renderGridItem = (itemData: Category) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigate('CategoryMeals', { categoryId: itemData.id });
        }}
      >
        <View>
          <Text>{itemData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // <View style={styles.screen}>
    //   <Text>Categories Screen</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       onSelectCategory('breakfast');
    //     }}
    //   />

    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       props.navigation.replace('MealDetail');
    //     }}
    //   />
    // </View>

    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => renderGridItem(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Categories',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
