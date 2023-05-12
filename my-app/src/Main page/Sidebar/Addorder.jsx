import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'


function Addorder() {

    const [FirstName, setFirstName] = useState([])
    const [LastName, setLastName] = useState([])
    const [OrderId, setOrderId] = useState([])
    const [ProductNumber, setProductNumber] = useState([])
    const [Date, setDate] = useState([])

    const createorder=async(event)=>{
        event.preventDefault();

        const api='http://localhost:4000/createorder';

        const createorder=await axios.post(api,{FirstName,LastName,OrderId,ProductNumber,Date})
        
        if(createorder.data.cresteorder){
        await swal('Order Created',createorder.data.msg,'success')
        } else {
            await alert(createorder.data.msg)
        }
    }

    

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
       
       <Card  style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
        <h3 style={{marginLeft:'8rem',color:'#A88987'}}><i>CREATE ORDER</i></h3>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />

        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="LastName" onChange={(e)=>setLastName(e.target
        .value)}/>

        <Form.Label>OrderId</Form.Label>
        <Form.Control type="text" placeholder="OrderId"  onChange={(e)=>setOrderId(e.target.value)}/>

        <Form.Label>Product Number</Form.Label>
        <Form.Control type="number" placeholder="Product Number"onChange={(e)=>setProductNumber(e.target.value)} />

        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="Published"onChange={(e)=>setDate(e.target.value)} />

    
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={createorder}>
        Submit
      </Button>
    </Form>
    </Card>
       
    </div>
  )
}

export default Addorder