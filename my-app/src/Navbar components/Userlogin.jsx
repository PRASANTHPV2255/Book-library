import React, { useState } from 'react'
import Navebar from '../Navebar'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

function Userlogin() {
    const nav=useNavigate()

    //const [user, setuser] = useState([])
     
    const [Email,setEmail] = useState('')

    const [Password, setPassword] = useState('')
   
    const api='http://localhost:4000/login';

    const userlogin=async(event)=>{
        event.preventDefault()
        const check=await axios.post(api,{Email,Password})

        if(check.data.Token){
          localStorage.setItem('token',check.data.Token)
          localStorage.setItem('userId',check.data.userId)
          localStorage.setItem('userName',check.data.usename)
          console.log(check.data);
            await swal('UserLogin success',check.data.msg,'success')
            nav(`/bookshop`)
        } else {
            await swal('Error',check.data.msg,'error')
        }
    }

  return (
    <div>
        <Navebar/>

        <Card border="info" style={{ width: '25rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'white',backgroundColor:'#241F31'}}>
        <Card.Header style={{textAlign:'center'}}>User Login</Card.Header>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text  style={{color:'whitesmoke'}}>
          We'll never share your email  with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="primary" type="submit" onClick={userlogin}>
        Login
      </Button>
      </div>
    </Form>
        </Card.Body>
      </Card>
        
    </div>
  )
}

export default Userlogin