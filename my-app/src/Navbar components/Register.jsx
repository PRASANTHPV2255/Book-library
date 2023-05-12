import React, { useState } from 'react'
import { Button, Card, Form, } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Navebar from '../Navebar'


function Register() {
    const [FirstName, setFirstName] = useState('')
    const [Lastname, setLastname] = useState('')
    const [Email, setEmail] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setconfirmPassword] = useState('')

    const nav=useNavigate()

   

    const register=async(event)=>{
        event.preventDefault()
        const api='http://localhost:4000/signup';

        const user=await axios.post(api,{FirstName,Lastname,Email,PhoneNumber,Password,ConfirmPassword})
        await console.log(user.data);

        if(user.data.Token){
          localStorage.setItem('token',user.data.Token)
          localStorage.setItem('userId',user.data.userId)
          localStorage.setItem('userName',user.data.usename)
         await swal("Users signin",user.data.msg,"Success")
          nav('/bookshop')
        } else {
          swal("error",user.data.msg,"error")
        }
    }

  return (
    <div>
      <Navebar/>
     
          <Card border="info" style={{ width: '25rem',marginLeft:'auto',marginRight:'auto',marginTop:'2rem',color:'darkgray'}}>
        <Card.Header style={{textAlign:'center'}}>Register</Card.Header>
        <Card.Body>
        <Form>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name"  onChange={(e)=>setFirstName(e.target.value)} />

        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name"  onChange={(e)=>setLastname(e.target.value)} />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="Phone number" onChange={(e)=>setPhoneNumber(e.target.value)} />

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setconfirmPassword(e.target.value)} />
      </Form.Group>
    
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="primary" type="submit" onClick={register}>
        Submit
      </Button>
      </div>
    </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Register