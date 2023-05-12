import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Viewcustomer() {
    
    const nav=useNavigate()
     
    const {id}=useParams()

    const [viewcustomer, setviewcustomer] = useState([])

    useEffect(() => {
        const api=`http://localhost:4000/findsingle/${id}`
     axios.get(api).then(res=>{
        setviewcustomer(res.data)
        //console.log(res.data);
     })
    }, [])
    
    const backdiscustomer=()=>{
        nav('/Discustemer')
    }

  return (
    <div style={{display:'flex'}}>
          <Sidebar/>
          <Card className="text-center" style={{marginLeft:'auto',marginRight:'auto',marginTop:'3rem',marginBottom:'auto',width:'35rem',height:'40rem',fontStyle:'//#region ',backgroundColor:'#D5EEEF'}}>
      <Card.Header>CUSTOMEER DETAILS</Card.Header>
      <Card.Body>
        <Card.Title><u>CUSTOMER NAME</u></Card.Title>
        <Card.Text>{viewcustomer.Name} </Card.Text>

        <Card.Title><u>EMAIL</u></Card.Title>
        <Card.Text>{viewcustomer.Email} </Card.Text>

        <Card.Title><u>ADDRESS</u></Card.Title>
        <Card.Text>{viewcustomer.AddressLine1} </Card.Text>

        <Card.Title><u>City</u></Card.Title>
        <Card.Text>{viewcustomer.City} </Card.Text>

        <Card.Title><u>State</u></Card.Title>
        <Card.Text>{viewcustomer.State} </Card.Text>

        <Card.Title><u>PinCode</u></Card.Title>
        <Card.Text>{viewcustomer.PinCode} </Card.Text>

        <Card.Title><u>Country</u></Card.Title>
        <Card.Text>{viewcustomer.Country} </Card.Text>

        <Button variant="primary" onClick={backdiscustomer}>Go Back</Button>
      </Card.Body>
     
    </Card>
    </div>
  )
}

export default Viewcustomer