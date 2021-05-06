import React, {useState} from 'react'
import { Button, StyleSheet, Text,  TouchableWithoutFeedback,  View, Keyboard } from 'react-native';
import Card from '../Components/Cards'
import Colors from '../constants/colors'
import Input from '../Components/input'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler =inputText=>{
//i'm setting it to our inputText where I replace some content 
//based on a regular expression. Now regular expressions can be scary
//but that's a simple one, we create it with two forward slashes and in there,
//I'll add square brackets and basically with this expression say
//that I'm replacing anything that's not a number 0 to 9, so not a number,
//globally in the entiretext so that means it will not just look for the first hit basically 
//but it will search the entire text, with an empty string, so I'll basically drop any non-number of value. 
//That's what's happening here and that's what I store in my new state.
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    };

    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text style={styles.title}>Start A New Game !!!</Text>
            <Card style={styles.inputContainer}>
                <Text> Select A Number !!! </Text>
                <Input style={styles.input} 
                blurOnSubmit
                 autoCapitalize='none'
                  autoCorrect={false}
                   keyboardType="number-pad" 
                   maxLength={2}
                   onChangeText={numberInputHandler}
                   value={enteredValue}
                   />
                <View style={styles.buttonsContainer}>
                    <View  style={styles.button}>
                        <Button title="RESET" color={Colors.accent}/>
                    </View>
                    <View  style={styles.button}>
                        <Button title="CONFIRM"  color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    button: {
        width: 90,
    },
    input: {
        width: 100,
        textAlign:'center'
    }
});
export default StartGameScreen;