import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useState } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
} from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState<{ id: string; text: string }[]>([]);

  function goalInputHandler(enteredGoal: string) {
    setEnteredGoalText(enteredGoal);
  }

  const addGoalHandler = () => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        text: enteredGoalText,
      },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => goalInputHandler(text)}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* <ScrollView style={styles.goalsContainer}>
        {goalList.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </ScrollView> */}
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.text}</Text>
          </View>
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
