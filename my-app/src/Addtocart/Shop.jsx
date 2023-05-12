import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, NavDropdown, Navbar, } from 'react-bootstrap'
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";
import Addingtocart from './Addingtocart';
import Singlebook from './Singlebook';

function Shop() {




    //Display book
    
    const [cardbook, setcardbook] = useState([])
    const api='http://localhost:4000/disbook'

    useEffect(() => {
      axios.get(api).then(res=>{
        setcardbook(res.data)
      })

    }, [])
    //console.log(cardbook);

    //path to cart
    const nav=useNavigate()

    const cart=()=>{
        nav('/cart')
    }
   const logout=()=>{
    nav('/')
   }

    
    

  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       
      <Container>
        <Navbar.Brand style={{marginLeft:'1rem',fontSize:'1.5rem',fontFamily:'revert-layer'}}>BOOKS</Navbar.Brand>
      </Container>
      <div style={{display:'flex',justifyContent:'space-around',marginRight:'5rem'}}>
      <NavDropdown title={<BsPersonCircle style={{width:'2rem',color:'white',height:'2rem',marginRight:'1rem'}}/>} id="navbarScrollingDropdown">
              <div style={{textAlign:'center'}}>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={cart}>Cart</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </div>
            </NavDropdown>
            
            <RiShoppingCartLine onClick={cart} style={{color:'white',width:'2rem',height:'2rem',marginLeft:'1rem'}}/>
            
            </div>
    </Navbar>

    <div className='carddiv' style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem',marginLeft:'3rem'}}>

    {cardbook.map((book)=>(
       <Singlebook book={book}/>
    ))}

    </div>
    </div>
  )
}


export default Shop