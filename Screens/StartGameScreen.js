import React from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import Card from '../Components/Cards'
const StartGameScreen = props => {

    return (
        <View style={styles.container}>
            <Text>Start A New Game !!!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select A Number !!!</Text>
                <TextInput />
                <View style={styles.buttonsContainer}>
                    <View>
                        <Button style={styles.button} title="RESET" />
                    </View>
                    <View>
                        <Button style={styles.button} title="CONFIRM" />
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
        width: 100,
    },
});
export default StartGameScreen;