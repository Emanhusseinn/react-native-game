import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../Components/Cards';
import NumberContainer from '../Components/NumberContainer';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice));

        const currentLow = useRef(1);
        const currentHigh= useRef(100);



        const nextGuessHandler= direction => {
            if ((direction === 'lower' && currentGuess< props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
                Alert.alert('You Lier 😏', 'You know that this is wrong...',
                 [{text: 'Sorry!', style: 'cancel'}]);
                 return;
            }
            if (direction === 'lower'){
                currentHigh.current = currentGuess;
            }
        };

    return (

        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title='GREATER' onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
        screen: {
            flex: 1,
            padding:10,
            alignItems: 'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        width: 300,
        maxWidth: '80%'
    }
});
export default GameScreen;