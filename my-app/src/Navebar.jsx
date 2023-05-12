import React from 'react'
import {  Container, Nav, Navbar,} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
function Navebar() {
  const nav=useNavigate()
    const home=()=>{
      nav('/home')
  }
  const login=()=>{
    nav('/login')
  }
  const register=()=>{
    nav('/register')
  }
  
  const userlogin=()=>{
    nav('/userlogin')
  }
  return (
    <div>
           <Navbar bg="#147A2A" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#" style={{color:'lightblue'}} onClick={home}>Book Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:'#608C2D'}} onClick={home}>Home</Nav.Link>
            <Nav.Link  style={{color:'#608C2D'}}onClick={register}>Register</Nav.Link>  
            <Nav.Link style={{color:'#608C2D',marginRight:'1rem'}} onClick={userlogin}>Login</Nav.Link>
            <Nav.Link style={{color:'#A51D2D',paddingLeft:'78rem'}}onClick={login}>Admin</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navebar