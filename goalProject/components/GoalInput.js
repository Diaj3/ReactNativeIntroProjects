import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (<View style={styles.input}>
        <TextInput placeholder="Course Goal" style={styles.txt_input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title = "ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>);
};

const styles = StyleSheet.create({
    txt_input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1, 
        padding: 10, 
        width: '80%'
      },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
});

export default GoalInput;