import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, useColorScheme, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Course Goal" style={styles.txt_input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title = "ADD" onPress={addGoalHandler} />
      </View>

      
      <FlatList data={courseGoals} renderItem={itemData => (<View style={styles.goalList}><Text>{itemData.item.value}</Text></View>)} />
    
      <View style = {styles.testing_zone}>
          <Text>Test Zone GANGANG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 35,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt_input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1, 
    padding: 10, 
    width: '80%'
  },
  testing_zone: { 
    marginTop: 30,
    backgroundColor: "green",
    padding: "2%",
    alignItems: "center",
  },
  goalList: {
    marginTop: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});



