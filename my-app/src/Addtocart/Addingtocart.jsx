import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, NavDropdown, Navbar, Table } from 'react-bootstrap'
import {  BsPersonCircle } from 'react-icons/bs'
import { GiBookCover } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Addingtocart() {


    //Back to disCard books

    const nav=useNavigate()

    const books=()=>{
        nav('/bookshop')
    }
    const logout=()=>{
        nav('/')
       }

       const [cart, setcart] = useState([])
      
       useEffect(() => {
        const api='http://localhost:4000/cart'

        const userId=localStorage.getItem('userId')
        axios.post(api,{userId}).then(res=>{
          setcart(res.data.product.Cart)
          console.log(res.data.product.Cart);
        })
       }, [])
      
     
       const removeitem=(item)=>{
        const api='http://localhost:4000/removeitem'
          
        const bookid=item._id

        const userId=localStorage.getItem('userId')

        const data={bookid,userId}
        
        axios.put(api,data).then(res=>{
          setcart(cart.filter(crt=>crt._id !== bookid))
          //console.log(res.data);
        })
        toast.success(`${item.BookName} removed`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
       }


       //increment the quantity

       const handleIncrement = (productid) => {
        const updatedCart = cart.map((item) => {
          if (item._id === productid) {
            return {
              ...item,
              Quantity: item.Quantity + 1,
            };
          }
          return item;
        });
        setcart(updatedCart);
      };
      
      //Decrement the quantity
      const handleDecrement = (productid) => {
        const updatedCart = cart.map((item) => {
          if (item._id === productid && (item.Quantity+1) > 1) {
            return {
              ...item,
              Quantity: item.Quantity - 1,
    
            };
          }
          return item;
        });
        setcart(updatedCart);
      };
    
      
      // calculate total price of items in the cart
  const totalPrice = cart.reduce((price, item) => price + (item.Quantity+1) * item.Price, 0);
    

  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       
       <Container>
         <Navbar.Brand style={{marginLeft:'1rem',fontSize:'1.5rem',fontFamily:'revert-layer'}}>Shoping Cart</Navbar.Brand>
       </Container>
       <div style={{display:'flex',justifyContent:'space-around',marginRight:'5rem'}}>
       <NavDropdown title={<BsPersonCircle style={{width:'2rem',color:'white',height:'2rem',marginRight:'1rem'}}/>} id="navbarScrollingDropdown">
               <div style={{textAlign:'center'}}>
               <NavDropdown.Item >Profile</NavDropdown.Item>
               <NavDropdown.Item onClick={books} >Books</NavDropdown.Item>
               <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
             </div>
             </NavDropdown>
             
             <GiBookCover onClick={books} style={{color:'white',width:'2rem',height:'2rem',marginLeft:'1rem'}}/>
             
             </div>
     </Navbar>
     <ToastContainer />
<div>
   <h2 style={{marginTop:'2rem',marginLeft:'1rem',color:'yellowgreen'}}>My Cart</h2>
   <span style={{marginLeft:'1rem',fontSize:'20px',color:'blueviolet'}}>Total Price:{totalPrice}</span>
</div>
    <div style={{marginLeft:'auto',marginRight:'auto'}} >
      <Table striped  hover responsive style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
            <thead style={{color:'#A18F5F',border:'#3D3846'}}>
        <tr style={{color:'red'}}>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
        </thead>
        {cart.map((e)=>(
        <tr key={e._id}>
          <td>{e.BookName}</td>
          <td style={{marginTop:'2rem'}}>
            <button style={{backgroundColor:'orangered',borderRadius:'5px',width:'3rem'}} onClick={()=>handleDecrement(e._id)}>-</button>
            <span>{e.Quantity+1}</span>
            <button style={{backgroundColor:'orangered',borderRadius:'5px',width:'3rem'}} onClick={()=>handleIncrement(e._id)}>+</button>
          </td>
          <td>{e.Price*(e.Quantity+1)}</td>
          <td>
            <button style={{backgroundColor:'darkcyan',color:'yellowgreen',marginTop:'1rem',borderRadius:'5px'}} onClick={()=>removeitem(e)}>Remove</button>
          </td>
        </tr>
        ))}
      </Table>
    </div>
    </div>
  )
}

export default Addingtocart