import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const CardContact = ({data, onClick}) => {
    let photo = {uri: data.photo}
    return (
        <TouchableOpacity onPress={(onClick) }>
            <View style={{
                borderRadius:8,
                flexDirection: 'row',
                height: 90,
                borderBottomWidth:1,
                borderColor: "#e1e1e1"
            }}>
                <View style={{ width:'26%',  borderRadius: 8,  alignItems:'center', justifyContent:'center'}}>
                    <Image source={ photo } 
                        style={{ width: 80, height: 80, borderRadius:40, borderWidth:1}} />
                </View>
                <View style={{ 
                marginHorizontal: 14,
                marginVertical: 8,}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16}}>{data.firstName} {data.lastName}</Text>
                    <Text >{data.age} Years Old</Text>
                </View>
                
            </View>
        </TouchableOpacity>

    )
}

export default CardContact

const styles = StyleSheet.create({})
