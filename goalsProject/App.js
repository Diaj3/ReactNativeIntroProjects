import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, useColorScheme, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() { //TODO: Implementing deletion of the goals

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  return (
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler}/>

      <FlatList data={courseGoals} renderItem={itemData => (<GoalItem id = {itemData.item.id} title = {itemData.item.value} onDelete = {() => removeGoalHandler} />)} />
    
      <View style = {styles.testing_zone}>
          <Text>Testing Zone</Text>
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    screen: {
      padding: 35,
    },
    testing_zone: { 
      marginTop: 30,
      backgroundColor: "green",
      padding: "2%",
      alignItems: "center",
    }
  });
