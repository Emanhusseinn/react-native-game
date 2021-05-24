import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';

import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';



// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };



const fetchFonts =() =>{
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/fonts/OpenSans-Bold.ttf'),


  });
}; 
export default function App() {
const [userNumber, setUserNumber]= useState();
const [guessRounds, setGuessRounds] = useState(0);
const [dataLoaded, setDataLoaded] = useState(false); 
 

if(!dataLoaded) {
  return <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)} onError={(err)=> console.log(err)}/>;
}

const configureNewGameHandler = () => {
  setGuessRounds(0);
  setUserNumber(null);
}

const startGameHandler=(selectedNumber)=>{
  setUserNumber(selectedNumber);
};

const GameOverHandler = numOfRounds =>{
  setGuessRounds(numOfRounds);
};

let content =  <StartGameScreen onStartGame={startGameHandler}/>;
if (userNumber && guessRounds<= 0){
      content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler}/>;
}else if (guessRounds > 0){
  content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;

}

  return (
    <View style={styles.container}>
      <Header title='Guess The Number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});