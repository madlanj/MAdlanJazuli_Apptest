import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import { CardContact, FooterCardContact } from '../../component';
import {useDispatch, useSelector} from 'react-redux';
import { fetchContact, resetForm, setContactForm } from '../../redux/contact/action';

function Home({navigation}) {
    const state = useSelector(state => state.contact);
    const dispatch = useDispatch();

    
    const RenderedContact = ({item}) => (
        <CardContact data={item}   onClick={() => detail(item)} />
    );

    const detail = (item) => {
        dispatch(setContactForm(item))
        console.log(state.form)
        navigation.navigate('Detail Contact')
    }

    const loadData = () => {
        dispatch(fetchContact());
    } 


    useEffect(() => {
        if(state.dataContact.length <= 0){   
            dispatch(fetchContact());
        }
    }, [state.dataContact])

    const addContact = () => {
        dispatch(resetForm())
        navigation.navigate("Add Contact")
    }


    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 10}}>        

            <FlatList
                ListFooterComponent = {<FooterCardContact/>}
                data= {state.dataContact}
                renderItem= {RenderedContact}
                keyExtractor= {(item, index) => index.toString()} 
            />
                       

            <TouchableOpacity
                    style={styles.touchableOpacityStyle}
                    onPress={() => addContact()}
            >
                <Image style={styles.floatingButtonStyle}
                    source={require('../../image/icon-plus.png')}
                />
            </TouchableOpacity> 
            
        </SafeAreaView>
       
    )
}

export default Home

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
