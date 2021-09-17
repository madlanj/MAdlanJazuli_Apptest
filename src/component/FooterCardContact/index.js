import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Loading} from '..';
import { useSelector } from 'react-redux';

const FooterCardContact = () => {
    const state = useSelector(state => state.contact);

    return (
        <View style= {{
            position: 'relative',
            marginTop: 10,
            marginBottom: 10,
            paddingBottom: 20
        }}>
            { state.loading ? <Loading textLoading="Please Wait"/> : null }
        </View>
    )
}

export default FooterCardContact

const styles = StyleSheet.create({})
