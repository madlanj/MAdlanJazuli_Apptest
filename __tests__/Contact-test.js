import axios from 'axios';
import { getData, createContact, deleteContact, updateContact } from '../src/service/AxiosContact';

jest.mock('axios');

test('test get contact', () => {
    const contacts = [
        {
            "message": "Get contacts",
            "data": [
              {
                "id": "93ad6070-c92b-11e8-b02f-cbfa15db428b",
                "firstName": "Max",
                "lastName": "Jhon",
                "age": 90,
                "photo": "http://dfafa.c"
              }
            ]
          }
    ];
    const resp = {data: contacts};
    axios.get.mockResolvedValue(resp);
  
  
    return getData().then(data => expect(data).toEqual(contacts));
});

test('test post contact', () => {
    const contacts = [
        {
            "message": "contact saved"
        }
    ];
    const requestData = {
        
            "firstName": "Bilbo",
            "lastName": "Baggins",
            "age": 111,
            "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
          
    }
    const resp = {data: contacts};
    axios.post.mockResolvedValue(resp);
  
  
    return createContact(requestData).then(data => expect(data).toEqual(contacts));
});

test('test delete contact', () => {
    const contacts = [
        {
            "message": "contact unavailable"
        }
    ];
    
    const resp = {data: contacts};
    axios.delete.mockResolvedValue(resp);
  
  
    return deleteContact("93ad6070-c92b-11e8-b02f-cbfa15db428b").then(data => expect(data).toEqual(contacts));
});

test('test update contact', () => {
    const contacts = [
        {
            "message": "Contact edited",
            "data": {
                "firstName": "bayu",
                "lastName": "air",
                "age": 2,
                "photo": "http://sddfsfs.dsdfs",
                "id": "8929ce20-179f-11ec-b76d-b753b3e8ee92"
            }
        }
    ];
    const requestData = {
            "firstName": "bayu",
            "lastName": "air",
            "age": 2,
            "photo": "http://sddfsfs.dsdfs"     
          
    }
    const resp = {data: contacts};
    axios.put.mockResolvedValue(resp);
  
  
    return updateContact(requestData, "8929ce20-179f-11ec-b76d-b753b3e8ee92").then(data => expect(data).toEqual(contacts));
});