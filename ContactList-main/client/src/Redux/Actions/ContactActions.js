import { GET_CONTACTS, GET_ONE_CONTACT } from "../ActionTypes/ContactTypes"
import axios from 'axios'

export const getContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/Contact/getContacts')
        // console.log(res)
        dispatch({
            type : GET_CONTACTS,
            payload : res.data.contacts
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/Contact/getOneContact/${id}`)
        dispatch({
            type : GET_ONE_CONTACT,
            payload : res.data.oneContact
        })
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newContact)=>async(dispatch)=>{
    try {
        await axios.post('/api/Contact/addContact',newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(id,newContact)=>async(dispatch)=>{
    try {
        await axios.put(`/api/Contact/updateContact/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/Contact/deleteContact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

