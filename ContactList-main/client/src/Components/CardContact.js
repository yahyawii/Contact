import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { deleteContact } from "../Redux/Actions/ContactActions"
const CardContact=({contact})=>{
    const dispatch = useDispatch()
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{contact.age}</Card.Subtitle>
            <Card.Text>
              {contact.email}
            </Card.Text>
            <Card.Link as={Link} to={`/updateContact/${contact._id}`}>Update</Card.Link>
            <br/>
            <br/>
            <Button variant="danger" onClick={()=> dispatch(deleteContact(contact._id))}>Delete</Button>
        </Card.Body>
        </Card>
    )
}

export default CardContact