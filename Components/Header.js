import React from 'react'
import { Button, StyleSheet,ImageBackground, Text, TextInput, View, ScrollView, FlatList} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
           
            {/* <ImageBackground  source={require('https://reactjs.org/logo-og.png')} ></ImageBackground> */}
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
        
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop: 36,
        backgroundColor:'#ff944d',
        alignItems: 'center',
        justifyContent:'center'
    },
    headerTitle:{
        color: 'black',
        fontSize: 18
        
    }

    
});
export default Header;