import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Label, InputText, ButtonBlue, Loading} from '../../component'
import { editContact, setForm } from '../../redux/contact/action';

function Update({navigation}) {
    const state = useSelector(state => state.contact);
    const dispatch = useDispatch();


    const changeForm = (value, input) => {
        dispatch(setForm(input,value))
    };

    const edit = () => {
        dispatch(editContact(state.form.id))
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 10}}>
            <View>
                <Label textLabel="First Name" />
                <InputText value={state.form.firstName}  onChangeText={ (value) => changeForm(value, 'firstName') }  />

                <Label textLabel="Last Name" />
                <InputText value={state.form.lastName}  onChangeText={ (value) => changeForm(value, 'lastName') }  />

                <Label textLabel="Age" />
                <InputText value={state.form.age + ''}  onChangeText={ (value) => changeForm(value, 'age') }  />

                <Label textLabel="URL Image" />
                <InputText value={state.form.photo}  onChangeText={ (value) => changeForm(value, 'photo') }  />
            </View>
            <View style={{ flexDirection:'row', justifyContent: 'space-around',  paddingTop:30}}>
            { state.loading ? <Loading textLoading="Please wait ..." /> : (
                <ButtonBlue textButton="Save" onPress={ () => edit()} />
            )}
            </View>
            
        </SafeAreaView>  
    )
}

export default Update

const styles = StyleSheet.create({
    
   
})
