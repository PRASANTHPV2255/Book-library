
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'

function Vieworder() {
   
    const {id}=useParams()

    const [singleorder, setsingleorder] = useState([])

    const api=`http://localhost:4000/Singleorder/${id}`

    useEffect(() => {
       
         axios.get(api).then(res=>{
            setsingleorder(res.data)
            console.log(res.data);
         })
    }, [])

    const nav=useNavigate()

    const back=()=>{
        nav('/disorder')
    }
    

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <Card className="text-center" style={{marginLeft:'auto',marginRight:'auto',marginTop:'3rem',marginBottom:'auto',width:'30rem',height:'32rem',fontStyle:'//#region ',backgroundColor:'#D5EEEF'}}>
      <Card.Header>ORDER DETAILS</Card.Header>
      <Card.Body>
        <Card.Title><u>FIRST NAME</u></Card.Title>
        <Card.Text>{singleorder.FirstName} </Card.Text>

        <Card.Title><u>LAST NAME</u></Card.Title>
        <Card.Text> {singleorder.LastName}</Card.Text>

        <Card.Title><u>ORDER ID</u></Card.Title>
        <Card.Text>{singleorder.OrderId}</Card.Text>

        <Card.Title><u>PRODUCT NUMBER</u></Card.Title>
        <Card.Text>{singleorder.ProductNumber}</Card.Text>

        <Card.Title><u>DATE</u></Card.Title>
        <Card.Text>{singleorder.Date}</Card.Text>

        

        <Button variant="primary" style={{marginTop:'2rem'}} onClick={back} >Go Back</Button>
      </Card.Body>
     
    </Card>
    </div>
  )
}

export default Vieworder