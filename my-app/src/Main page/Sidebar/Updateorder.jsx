import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap'
import swal from 'sweetalert'

function Updateorder() {
    const nav=useNavigate()

    const [orderdetails, setorderdetails] = useState([])

    const {id}=useParams()

     useEffect(() => {
        const api=`http://localhost:4000/Singleorder/${id}`
        axios.get(api).then(res=>{
            setorderdetails(res.data)
        })
     
     }, [])
     //console.log(orderdetails);

     //Update order
     const [FirstName,setFirstName] = useState(orderdetails.FirstName)
     const [LastName, setLastName] = useState(orderdetails.LastName)
     const [OrderId, setOrderId] = useState(orderdetails.OrderId)
     const [ProductNumber, setProductNumber] = useState(orderdetails.ProductNumber)
     const [Date, setDate] = useState(orderdetails.date)


     const orderupdate=async(event)=>{
        event.preventDefault()

        const api=`http://localhost:4000/updateorder/${id}`

        const update=await axios.put(api,{FirstName,LastName,OrderId,ProductNumber,Date})

        if(update.data.update){
          await swal('Order updated',update.data.msg,'success')
        }
        else{
          await alert(update.data.msg)
        }
        nav('/disorder')
     }

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>

        <Card  style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
        <h3 style={{marginLeft:'8rem',color:'#A88987'}}><i>UPDATE ORDER</i></h3>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" Value={orderdetails.FirstName} placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />

        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" Value={orderdetails.LastName} placeholder="LastName" onChange={(e)=>setLastName(e.target
        .value)}/>

        <Form.Label>OrderId</Form.Label>
        <Form.Control type="text" Value={orderdetails.OrderId} placeholder="OrderId"  onChange={(e)=>setOrderId(e.target.value)}/>

        <Form.Label>Product Number</Form.Label>
        <Form.Control type="number" Value={orderdetails.ProductNumber} placeholder="Product Number"onChange={(e)=>setProductNumber(e.target.value)} />

        <Form.Label>Date</Form.Label>
        <Form.Control type="Date"Value={orderdetails.Date} placeholder="Published"onChange={(e)=>setDate(e.target.value)} />

    
      </Form.Group>
      <Button variant="primary" type="submit" onClick={orderupdate} style={{marginLeft:'10rem'}}>
        Submit
      </Button>
    </Form>
    </Card>
       
    </div>
  )
}

export default Updateorder