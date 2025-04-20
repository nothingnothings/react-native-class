import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useState } from 'react';

import { StyleSheet, FlatList, View, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState<{ id: string; text: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = () => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        text: enteredGoalText,
      },
    ]);
    setModalVisible(false);
    setEnteredGoalText('');
  };

  const deleteGoalHandler = (id: string) => {
    setGoalList((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== id)
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        data={goalList}
        renderItem={({ item }) => (
          <GoalItem
            goalText={item.text}
            key={item.id}
            onDelete={() => deleteGoalHandler(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});
