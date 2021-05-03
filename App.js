import React , {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import Header from './Components/Header'

export default function App() {


    return (
      <View style={styles.container}>
       <Header title='Guess The Number'/>
      </View>
  ); 
}

const styles = StyleSheet.create({ 
  container:{
   flex:1
  }

});