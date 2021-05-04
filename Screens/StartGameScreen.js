import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Card from '../Components/Cards'
import Colors from '../constants/colors'

const StartGameScreen = props => {

    return (
        <View style={styles.container}>
            <Text>Start A New Game !!!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select A Number !!!</Text>
                <TextInput />
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

    )
}

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
});
export default StartGameScreen;