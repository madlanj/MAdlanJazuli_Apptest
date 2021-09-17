import axios from 'axios'

const ApiClientApp = axios.create({
    baseURL : 'https://simple-contact-crud.herokuapp.com'
    }
);

ApiClientApp.interceptors.request.use(request => {
    return request;
})

ApiClientApp.interceptors.response.use(undefined, error => {
    const {response} = error;
    const {data} = response;
    if(data){
        console.log(data);
    }
})

export default ApiClientApp