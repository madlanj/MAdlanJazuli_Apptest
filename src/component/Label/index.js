import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Label = ({textLabel}) => {
    return (
            <Text style={styles.label}>{textLabel}</Text>
        
    )
}

export default Label

const styles = StyleSheet.create({
    label : {
        marginTop: 10
    },
})
