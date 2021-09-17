import {
    SET_LOADING,
    SET_PAGE,
    SET_CARI,
    SET_DATA_PRODUCT,
    RESET_DATA_PRODUCT,
    SET_FORM,
    RESET_FORM,
    SET_PRODUCT_FORM,
    SET_TOTAL_PAGE,
    SET_DATA_CONTACT,
    RESET_DATA_CONTACT,
    SET_CONTACT_FORM
} from './constanst'

const initialState = {
    loading: false,
    cari : '',
    totalPage: 0,
    form: {},
    dataContact: [],
    
}




function contactReducer(state = initialState, action){
    switch (action.type) {
        case SET_LOADING:{
            return { ...state, loading: action.loading };
        }
        case SET_CARI :{
            return {...state, cari: action.cari};
        }
        case SET_PAGE :{
            return {...state, page: action.page};
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
        case SET_TOTAL_PAGE : {
            return {...state, totalPage: action.totalPage}
        }
        default:
            break;
    }
    return state;
}

export default contactReducer