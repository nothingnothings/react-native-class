import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

type GoalItemProps = {
  goalText: string;
  onDelete: (id: string) => void;
};

const GoalItem = (props: GoalItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.goalText)}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{props.goalText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  text: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalItem;
