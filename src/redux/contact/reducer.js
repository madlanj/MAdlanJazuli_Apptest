import {
    SET_LOADING,
    SET_FORM,
    RESET_FORM,
    SET_DATA_CONTACT,
    RESET_DATA_CONTACT,
    SET_CONTACT_FORM
} from './constanst'

const initialState = {
    loading: false,
    form: {},
    dataContact: [],
    
}




function contactReducer(state = initialState, action){
    switch (action.type) {
        case SET_LOADING:{
            return { ...state, loading: action.loading };
        }
        case SET_DATA_CONTACT :{
            return {...state, dataContact: [ ...state.dataContact, ...action.dataContact]};
        }
        case RESET_DATA_CONTACT :{
            return {...state, dataContact: []};
        }

       
        case RESET_FORM :{
            return {...state, form: {}};
        }
        case SET_FORM : {
            return {...state, form:{...state.form, [action.field] : action.value}};
        }
        case SET_CONTACT_FORM : {
            return { ...state, form: action.form}
        }
        default:
            break;
    }
    return state;
}

export default contactReducer