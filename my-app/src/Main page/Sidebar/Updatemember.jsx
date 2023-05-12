import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'

function Updatemember() {
    const nav=useNavigate()

    const {id}=useParams()

    const [member, setmember] = useState([])

    useEffect(() => {
        const api=`http://localhost:4000/singlemember/${id}`
        axios.get(api).then(res=>{
         setmember(res.data)
        //console.log(res.data);
      })
    }, [])
    

    const [Name, setName] = useState(member.Name)
    const [Email, setEmail] = useState(member.Email)
    const [DateOfBirth, setDateOfBirth] = useState(member.DateOfBirth)
    const [Gender, setGender] = useState(member.Gender)
    const [Description, setDescription] = useState(member.Description)
    const [Role, setRole] = useState(member.Role)
    const [PhoneNumber, setPhoneNumber] = useState(member.PhoneNumber)

      //Update
      const memberupdate=async(event)=>{
        event.preventDefault()

        const api=`http://localhost:4000/updatemember/${id}`

        const update=await axios.put(api,{Name,Email,DateOfBirth,Gender,Description,Role,PhoneNumber})

        await swal('Member updated',update.data.msg,'success')
        //alert('success')
        nav('/dismember')

      }

  return (

    <div style={{display:'flex'}}>
         <Sidebar/>

         <Card border="info" style={{ width: '28rem',marginLeft:'auto',marginRight:'auto',marginTop:'3rem',color:'white',height:'40rem',backgroundColor:'#000000'}}>
        <Card.Header style={{textAlign:'center',fontSize:'25px'}}><i>UPDATE MEMBER</i></Card.Header>
        <Card.Body>
        <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" Value={member.Name} placeholder="Name" onChange={(e)=>setName(e.target.value)}  />

      
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" Value={member.Email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text style={{color:'whitesmoke'}}>
          We'll never share your email with anyone else.<br/><br/>
        </Form.Text>
     

      <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="Date" Value={member.DateOfBirth} placeholder="Date Of Birth" onChange={(e)=>setDateOfBirth(e.target.value)} />

        <Form.Group style={{paddingTop:'1rem'}}>
      <Form.Label style={{paddingRight:'2rem'}}>Gender: </Form.Label>
      <Form.Check
            inline
            label="Male"
            name="group1"
            type='radio'
            value='true' 
            defaultChecked={member.Gender} 
            onChange={(e)=>setGender(e.target.value)}
           
          />
           <Form.Check
            inline
            label="Female"
            name="group1"
            type='radio'
            value='false'
            defaultChecked={!member.Gender} 
            onChange={(e)=>setGender(e.target.value)}
            
          />
      </Form.Group>

        <Form.Label>Description</Form.Label>
        <Form.Control type="text" Value={member.Description} placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />

        <select style={{width:'12rem',borderRadius:'7px',borderBlockColor:'cyan',marginTop:'1rem'}} onChange={(e)=>setRole(e.target.value)}>

       <span>Role</span>
       <option value=''>Select</option>
  <option selected={member.Role==='Frontend developer'} value="Frontend developer">Frontend developer</option>

  <option selected={member.Role==='backend developer'} value="backend developer">backend developer</option>

  <option selected={member.Role==='Project manager'} value='Project manager'>Project manager</option>
  
</select><br></br>

        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control type="number" Value={member.PhoneNumber} placeholder="Phonenumber" onChange={(e)=>setPhoneNumber(e.target.value)}/>
        
   
    
      <div style={{display:'flex',justifyContent:'center',marginTop:'2rem'}}>
      <Button variant="primary" type="submit" onClick={memberupdate}>
        UPDATE
      </Button>
      </div>
    </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Updatemember