import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'


const InputText = ({value, onChangeText}) => {
    return (
        <TextInput style={styles.textInput} value={value} onChangeText={ onChangeText } />

    )
}

export default InputText

const styles = StyleSheet.create({
    textInput : {
        borderWidth:1, 
        borderColor:'#d4d4d4', 
        borderRadius:10, 
        marginTop:5, 
        height:36, 
        paddingHorizontal:10,        
        alignItems: 'center',   
        justifyContent: 'center',
    },
})
