import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

function Viewbook() {
    const [view, setview] = useState([])

    const {id}=useParams()
    useEffect(() => {
        const api=`http://localhost:4000/find/${id}`
        axios.get(api).then(res=>{
            setview(res.data.find)
            console.log(res.data.find);
            console.log(view);
        })
    },[])
  return (
    <div style={{display:'flex'}}>
        <>
        <Sidebar/>
        <Card style={{ width: '18rem',height:'17rem' ,backgroundColor:'greenyellow',marginLeft:'auto',marginRight:'auto',marginTop:'5rem'}}>
      <Card.Body>
        <Card.Title >BookName:{view.BookName}</Card.Title>
        <Card.Title>Language:{view.Language}</Card.Title>
        <Card.Title>Author:{view.Author}</Card.Title>
        <Card.Title>Genre:{view.Genre}</Card.Title>
        <Card.Title>Published:{view.Published}</Card.Title>
        <Card.Title>Price:{view.Price}</Card.Title>
        <Card.Title>Quantity:{view.Quantity}</Card.Title>
        
      </Card.Body>
    </Card>
    </>
    </div>
  )
}

export default Viewbook