
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Viewmember() {

    const [view, setview] = useState([])

    const {id}=useParams()

    useEffect(() => {

        const api=`http://localhost:4000/singlemember/${id}`;

        axios.get(api).then(res=>{
            setview(res.data)
            //console.log(view);
        })
 
    }, [])

    const nav=useNavigate()

    const back=()=>{
       nav('/dismember')
    }
    

  return (

    <div style={{display:'flex'}}>
        <Sidebar/>
        <Card className="text-center" style={{marginLeft:'auto',marginRight:'auto',marginTop:'3rem',marginBottom:'auto',width:'35rem',height:'40rem',fontStyle:'//#region ',backgroundColor:'#D5EEEF'}}>
      <Card.Header>TEAM MEMBER DETAILS</Card.Header>
      <Card.Body>
        <Card.Title><u>NAME</u></Card.Title>
        <Card.Text>{view.Name} </Card.Text>

        <Card.Title><u>EMAIL</u></Card.Title>
        <Card.Text>{view.Email} </Card.Text>

        <Card.Title><u>Date Of Birth</u></Card.Title>
        <Card.Text>{view.DateOfBirth} </Card.Text>

        <Card.Title><u>Gender</u></Card.Title>
        <Card.Text>{view.Gender ? 'Male' : 'Female'} </Card.Text>

        <Card.Title><u>Description</u></Card.Title>
        <Card.Text>{view.Description} </Card.Text>

        <Card.Title><u>Role</u></Card.Title>
        <Card.Text>{view.Role} </Card.Text>

        <Card.Title><u>PhoneNumber</u></Card.Title>
        <Card.Text>{view. PhoneNumber} </Card.Text>

        <Button variant="primary" style={{marginTop:'2rem'}} onClick={back}>Go Back</Button>
      </Card.Body>
     
    </Card>
    </div>
  )
}

export default Viewmember