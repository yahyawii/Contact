import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneContact, updateContact } from "../Redux/Actions/ContactActions"

const UpdateContact=()=>{
    const {id} = useParams()
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])

    const contact = useSelector(state=>state.ContactReducer.contact)
    useEffect(()=>{
        setName(contact.name)
        setAge(contact.age)
        setEmail(contact.email)
    },[contact])

    const handleUpdate=(a)=>{
        a.preventDefault()
        dispatch(updateContact(id,{name,age,email}))
        navigate('/listContact')
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name"  />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control value={age} onChange={(e)=> setAge(e.target.value)} type="text" placeholder="Enter age" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter email" />      
        </Form.Group>
  
        <Button variant="primary" type="submit" onClick={(e)=> handleUpdate(e)} >
          Submit
        </Button>
      </Form>
    )
}

export default UpdateContact