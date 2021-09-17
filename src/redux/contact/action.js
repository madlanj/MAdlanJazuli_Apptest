
import { 
    SET_LOADING, 
    SET_PAGE, 
    SET_CARI, 
    SET_FORM, 
    RESET_FORM , 
    SET_PRODUCT_FORM, 
    SET_TOTAL_PAGE,
    SET_DATA_CONTACT,
    RESET_DATA_CONTACT,
    SET_CONTACT_FORM} 
    from "./constanst"
import * as RootNavigation from '../../config/RootNavigation'
import { Alert } from "react-native";
import { getData, createContact, updateContact, deleteContact } from "../../service/AxiosContact"

export const fetchContact = () => {
    return async(dispatch) => {
        dispatch(setLoading(true))
        try {
            let data = await getData()
            dispatch(setDataContact(data.data))
            dispatch(setLoading(false))
            
        } catch (error) {
            dispatch(setLoading(false))
        } 
    }
}

export const addContact = () => {
    return async(dispatch, getState) => {
        let form = getState().contact.form || {};
        dispatch(setLoading(true))
        console.log(form);
        try {
            let data = await createContact(form)
            if(data.message == 'contact saved')
            {
                console.log(data);
                dispatch(resetForm())
                dispatch(resetDataContact())
                Alert.alert("Contact", "Success Add New Contact", [{
                    text: 'Ok', onPress: () => RootNavigation.navigate('Home')
              }]);
                
            }
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        } 
    }
}

export const editContact = (id) => {
    return async(dispatch, getState) => {
        let form = getState().contact.form || {};
        dispatch(setLoading(true))
        try {
            let data = await updateContact(form, id)
            if(data.message == 'Contact edited')
            {
                dispatch(resetDataContact())
                Alert.alert("Contact", "Success Edit Contact", [{
                    text: 'Ok', onPress: () => RootNavigation.navigate('Detail Contact')
                }]);
                console.log(data);
                
            }
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        } 
    }
}
export const destroyContact = (id) => {
    return async(dispatch, getState) => {
        let form = getState().contact.form || {};
        dispatch(setLoading(true))
        try {
            let data = await deleteContact(form, id)
            console.log(form.id)
            if(data.message == 'contact deleted')
            {
                dispatch(resetDataContact())
                Alert.alert("Contact", "Success Delete Contact", [{
                    text: 'Ok', onPress: () => RootNavigation.navigate('Home')
                }]);
                console.log(data);
                
            }
            dispatch(setLoading(false))
        } catch (error) {
            dispatch(setLoading(false))
        } 
    }
}

export const setLoading = loading => {
    return {
        type: SET_LOADING,
        loading,
    }
}
export const setPage = page =>{
    return {
        type: SET_PAGE,
        page
    }
}

export const setCari = cari =>{
    return {
        type: SET_CARI,
        cari
    }
}

export const setDataContact = dataContact =>{
    return {
        type: SET_DATA_CONTACT,
        dataContact
    }
}

export const resetDataContact = () =>{
    return {
        type: RESET_DATA_CONTACT
    }
}

export const resetForm = () =>{
    return {
        type: RESET_FORM
    }
}

export const  setForm = (field, value) => {
    return {
        type :SET_FORM,
        field,
        value
    }
}
export const setProductForm = (form) => {
    return{
        type: SET_PRODUCT_FORM,
        form
    }
}

export const setContactForm = (form) => {
    return{
        type: SET_CONTACT_FORM,
        form
    }
}

export const setTotalPage = totalPage =>
{
    return{
        type : SET_TOTAL_PAGE,
        totalPage
    }
}