import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import swal from 'sweetalert'
import Sidebar from './Sidebar'

function Addcustemer() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [AddressLine1, setAddressLine1] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [PinCode, setPinCode] = useState('')
    const [Country, setCountry] = useState('')


    const addCustemer=async(event)=>{
        event.preventDefault();
        const api='http://localhost:4000/addcustemer';

        const addcust=await axios.post(api,{Name,Email,AddressLine1,City,State,PinCode,Country})

        if(addcust.data.insertcustemer){
            swal('Custemer Added',addcust.data.msg,'success')
        } else {
            alert(addcust.data.msg)
        }
    }
    

  return (
    <div style={{display:'flex'}}>
    <Sidebar/>
    <>
    <Card border="info" style={{ width: '28rem',marginLeft:'auto',marginRight:'auto',marginTop:'2rem',color:'darkgray',height:'42rem'}}>
        <Card.Header style={{textAlign:'center',fontSize:'25px'}}><i>ADD CUSTEMER</i></Card.Header>
        <Card.Body>
        <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)} />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Label>Address</Form.Label>
        <Form.Control type="text"  placeholder="Address" onChange={(e)=>setAddressLine1(e.target.value)} />

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)} />
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" onChange={(e)=>setState(e.target.value)} />
        <Form.Label>PinCode</Form.Label>
        <Form.Control type="text" placeholder="PinCode" onChange={(e)=>setPinCode(e.target.value)} />
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" onChange={(e)=>setCountry(e.target.value)} />
        
      </Form.Group>
    
      <div style={{display:'flex',justifyContent:'center'}}>
      <Button variant="primary" type="submit" onClick={addCustemer}>
        ADD
      </Button>
      </div>
    </Form>
        </Card.Body>
      </Card>
    </>
    </div>
  )
}

export default Addcustemer