import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../Redux/Actions/ContactActions"
import CardContact from "./CardContact"

const ListContact=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[])
    const contacts = useSelector(state => state.ContactReducer.contacts)
    return(
        <div>
            {
                contacts.map(contact=> <CardContact key={contact._id} contact={contact}/>)
            }
        </div>
    )
}



export default ListContact