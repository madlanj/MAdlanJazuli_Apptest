import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'


const ButtonRed = ({textButton, onPress}) => {
    return (
        <TouchableOpacity style={ styles.btnEdit } onPress={ onPress }>
            <Text style={{ color: 'white', fontWeight: 'bold'}}>
                {textButton}
            </Text>
        </TouchableOpacity>  

    )
}

export default ButtonRed

const styles = StyleSheet.create({
    btnEdit : {
        width:'35%',
        height:35,
        alignItems: 'center',   
        justifyContent: 'center',
        borderRadius:10,
        backgroundColor: "#f03737"
    },
})
