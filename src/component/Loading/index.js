import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = ({textLoading}) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 10}}>
            <ActivityIndicator size="small" color="blue"/>
                <Text>{textLoading} </Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
