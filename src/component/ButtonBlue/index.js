import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'


const ButtonBlue = ({textButton, onPress}) => {
    return (
        <TouchableOpacity style={ styles.btnEdit } onPress={ onPress }>
            <Text style={{ color: 'white', fontWeight: 'bold'}}>
                {textButton}
            </Text>
        </TouchableOpacity>  

    )
}

export default ButtonBlue

const styles = StyleSheet.create({
    btnEdit : {
        width:'35%',
        height:35,
        alignItems: 'center',   
        justifyContent: 'center',
        borderRadius:10,
        backgroundColor: "#2b9fe5"
    },
})
