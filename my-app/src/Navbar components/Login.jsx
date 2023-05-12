import React, { useState } from 'react'
import { Button, Card, Form, } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Navebar from '../Navebar'


function Login() {
    const [Email,setEmail] = useState('')
  
    const [Password, setPassword] = useState('')
    const api='http://localhost:4000/login'

    const nav=useNavigate()

    const login=async(event)=>{
      event.preventDefault()
    const usercheck=await axios.post(api,{Email,Password})
    console.log(usercheck.data);
     if(usercheck.data.Token){ 
      await swal("Admin Login success",usercheck.data.msg,"success")
      nav('/main')
    } 
     else{
     await swal("Error",usercheck.data.msg,"error")
   }
    }
  return (
    
    <div>
      
      <Navebar/>
        <Card border="info" style={{ width: '25rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'darkgray'}}>
        <Card.Header style={{textAlign:'center',color:''}}>Admin Login</Card.Header>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email  with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="primary" type="submit" onClick={login}>
        Submit
      </Button>
      </div>
    </Form>
        </Card.Body>
      </Card>
      
         
    </div>
    
  )
}

export default Login