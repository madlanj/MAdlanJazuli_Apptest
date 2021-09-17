import ApiClientApp from "../../config/axios";

const getData = async() => {
    return ApiClientApp.get('/contact')
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err))
    
};

const createContact = async(form) => {
    return ApiClientApp.post('/contact' , {
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
    return ApiClientApp.put('/contact/'+id , {
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

const deleteContact = async(form, id) => {
    return ApiClientApp.delete('/contact/'+id)
    .then(resp => {
        if(resp)
           {return resp.data}
           return false
    })
    .catch( err => console.log(err))
}

export {getData, createContact, updateContact, deleteContact};