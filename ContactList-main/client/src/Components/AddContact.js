import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addContact } from "../Redux/Actions/ContactActions"

const AddContact=()=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(addContact({name,age,email}))
        navigate('/listContact')
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name"  />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control onChange={(e)=> setAge(e.target.value)} type="text" placeholder="Enter age" />      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter email" />      
        </Form.Group>
  
        <Button variant="primary" type="submit"  onClick={(e)=>handleAdd(e)}>
          Submit
        </Button>
      </Form>
    )
}

export default AddContact