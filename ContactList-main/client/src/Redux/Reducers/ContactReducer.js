import { GET_CONTACTS, GET_ONE_CONTACT } from "../ActionTypes/ContactTypes"

const initalState = {
    contacts : [],
    contact : {}
}

const ContactReducer=(state = initalState,action)=>{
    switch (action.type) {
        case GET_CONTACTS : return {...state, contacts : action.payload}        
        case GET_ONE_CONTACT : return {...state, contact : action.payload}
        default: return state
           
    }
}

export default ContactReducer