import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';



export default function App() {
const [userNumber, setUserNumber]= useState();
const [guessRounds, SetGuessRounds] =useState(0);


const startGameHandler=(selectedNumber)=>{
  setUserNumber(selectedNumber);
SetGuessRounds(0);
};

const GameOverHandler = numOfRounds =>{
  SetGuessRounds(numOfRounds);
}
let content =  <StartGameScreen onStartGame={startGameHandler}/>;
if (userNumber && guessRounds<= 0){
      content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler}/>;
}else if (guessRounds > 0){
  content = <GameOverScreen/>;

}

  return (
    <View style={styles.container}>
      <Header title='Guess The Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});