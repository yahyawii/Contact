import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavContact=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ContactList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/listContact'>Contacts</Nav.Link>
            <Nav.Link as={Link} to='/addContact'>Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavContact