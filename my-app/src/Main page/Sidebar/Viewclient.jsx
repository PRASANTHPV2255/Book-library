import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

function Viewclient() {
     const nav=useNavigate()
    const [viewdata, setviewdata] = useState([])
    const {id}=useParams()

    useEffect(() => {
     const api=`http://localhost:4000/findclient/${id}`
     axios.get(api).then(res=>{
        
       setviewdata(res.data)
       console.log(res.data);
       
     })

    }, [id])
    
    const backdis=()=>{
      nav('/disclient')
    }

   return (

   <div style={{display:'flex'}}>
        <>
       <Sidebar/>
        <Card style={{ width: '20rem',height:'17rem' ,backgroundColor:'greenyellow',marginLeft:'auto',marginRight:'auto'}}>
      <Card.Body>
        <Card.Title>ClientName:{viewdata.Name}</Card.Title>
        <Card.Title>Email:{viewdata.Email}</Card.Title>
        <Card.Title>Signedstatus:{viewdata.SignedStatus ? 'sign in' : 'not signin'}</Card.Title>
        <Card.Title>Role:{viewdata.Role}</Card.Title>
        <Card.Title>Phonenumber:{viewdata.Phonenumber}</Card.Title>
        <Button style={{marginLeft:'6.5rem'}}variant="outline-danger" onClick={backdis}>Back</Button>
        
        
      </Card.Body>
    </Card>
    </>
   </div>
  )
}

export default Viewclient