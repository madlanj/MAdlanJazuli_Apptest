import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBlue, ButtonRed } from '../../component';
import { destroyContact } from '../../redux/contact/action';

function Detail({navigation}) {
    const state = useSelector(state => state.contact);
    const dispatch = useDispatch()
    let photo = {uri: state.form.photo}

    const edit = () => {
        navigation.navigate("Update Contact")
    }

    const deleteContact = () => {
        dispatch(destroyContact(state.form.id))
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 10}}>
          
                <View style={{ alignItems:'center', justifyContent:'center'}}>
                        <Image source={photo} 
                            style={styles.imageContact} />
                </View>
                <View style={{paddingTop:20, marginHorizontal:20}}>
                    <Text >First Name : {state.form.firstName} </Text>
                    <Text >Last Name : {state.form.lastName}</Text>
                    <Text >Age : {state.form.age} </Text>    
                </View>
                <View style={{ flexDirection:'row', justifyContent: 'space-around',  paddingTop:50}}>
                    
                    <ButtonBlue textButton="Edit" onPress={ () => edit() }/>
                    <ButtonRed textButton="Delete" onPress={ () => deleteContact() }/>
                    
                </View>
            
            
        </SafeAreaView>  
    )
}

export default Detail

const styles = StyleSheet.create({
    
    imageContact : {
        width: 180, 
        height: 180, 
        borderRadius:90, 
        borderWidth:1
    },
})
