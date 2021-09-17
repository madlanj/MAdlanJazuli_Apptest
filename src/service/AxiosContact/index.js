import axios from 'axios';
const API = 'https://simple-contact-crud.herokuapp.com';

const getData = async() => {
    return axios.get(API+'/contact')
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err+'test'))
    
};

const createContact = async(form) => {
    return axios.post(API+'/contact' , {
        firstName: form.firstName,
	    lastName: form.lastName,
	    age: form.age,
	    photo: form.photo
    })
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err))

}

const updateContact = async(form, id) => {
    return axios.put(API+'/contact/'+id , {
        firstName: form.firstName,
	    lastName: form.lastName,
	    age: form.age,
	    photo: form.photo
    })
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err))      
}

const deleteContact = async(id) => {
    return axios.delete(API+'/contact/'+id)
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err))
}

export {getData, createContact, updateContact, deleteContact};