import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';

export default function App() {


  return (
    <View style={styles.container}>
      <Header title='Guess The Number' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});