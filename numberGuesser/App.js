import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';

export default function App() {
  return (
    <View styles={styles.screen}>
      <Header title = "Guess a Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {

  }
});
