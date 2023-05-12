

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'

function Addmember() {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [Gender, setGender] = useState('')
    const [Description, setDescription] = useState('')
    const [Role, setRole] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')

    const addmember=async(event)=>{
        event.preventDefault();

        const api='http://localhost:4000/addmember'

        const add=await axios.post(api,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber})
         
        if(add.data.insermember){
         await swal('Member Added',add.data.msg,'success')
        } else {
          alert(add.data.msg)
        }
    }
    

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <>
        <Card border="info" style={{ width: '28rem',marginLeft:'auto',marginRight:'auto',marginTop:'3rem',color:'white',height:'40rem',backgroundColor:'#000000'}}>
        <Card.Header style={{textAlign:'center',fontSize:'25px'}}><i>ADD MEMBER</i></Card.Header>
        <Card.Body>
        <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}  />

      
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text style={{color:'whitesmoke'}}>
          We'll never share your email with anyone else.<br/><br/>
        </Form.Text>
     

      <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="Date" placeholder="Date Of Birth" onChange={(e)=>setDateOfBirth(e.target.value)} />

        <Form.Group style={{paddingTop:'1rem'}}>
      <Form.Label style={{paddingRight:'2rem'}}>Gender: </Form.Label>
      <Form.Check
            inline
            label="Male"
            name="group1"
            type='radio'
            value="true" 
            onChange={(e)=>setGender(e.target.value)}
           
          />
           <Form.Check
            inline
            label="Female"
            name="group1"
            type='radio'
            value="false"
            onChange={(e)=>setGender(e.target.value)}
            
          />
      </Form.Group>

        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />

        <select style={{width:'12rem',borderRadius:'7px',borderBlockColor:'cyan',marginTop:'1rem'}} onChange={(e)=>setRole(e.target.value)}>

       <span>Role</span>
       <option value=''>Select</option>
  <option value="Frontend developer">Frontend developer</option>
  <option value="backend developer">backend developer</option>
  <option value='Project manager'>Project manager</option>
  
</select><br></br>

        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" placeholder="Phonenumber" onChange={(e)=>setPhoneNumber(e.target.value)}/>
        
   
    
      <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
      <Button variant="primary" type="submit" onClick={addmember}>
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

export default Addmember