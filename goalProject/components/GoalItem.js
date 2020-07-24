import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
    <View style={styles.goalList}>
        <Text>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    goalList: {
        marginTop: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
      }
})

export default GoalItem;