import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';

interface Props {
  title: string;
  color: string;
  onPress: () => void;
}

const CategoryGridTile = (props: Props) => {
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

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: Colors.dark,
  },
  color: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
  },
});

export default CategoryGridTile;
