import React from 'react'
import { StyleSheet, TouchableOpacity, Image} from 'react-native'


const ButtonAddContact = ({navigation}) => {
    return (
        <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    
            >
                <Image style={styles.floatingButtonStyle}
                    source={require('../../image/icon-plus.png')}
                />
            </TouchableOpacity> 

    )
}

export default ButtonAddContact

const styles = StyleSheet.create({
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        bottom: 10,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
})
