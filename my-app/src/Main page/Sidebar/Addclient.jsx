import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card,  Form } from 'react-bootstrap'
import swal from 'sweetalert'
import Sidebar from './Sidebar'

function Addclient() {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [SignedStatus, setSignedStatus] = useState('')
    const [Role, setRole] = useState('')
    const [Phonenumber, setPhonenumber] = useState('')
    

    const addclient=async(event)=>{
        event.preventDefault();

        const api='http://localhost:4000/addclient';

        const add=await axios.post(api,{Name,Email,SignedStatus,Role,Phonenumber})

        await console.log(add.data);
        //await alert(add.data.message)
        swal('Client Added',add.data.msg,'success')
        window.location.reload()
       // swal('Email already used',add.data.msg,'error')
    }
    
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <>
            <Card  style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
        <h3 style={{marginLeft:'8rem',color:'#A88987'}}><i>ADD CLIENT</i></h3>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Group>
      <Form.Label style={{paddingRight:'2rem'}}>SignedStatus: </Form.Label>
      <Form.Check
            inline
            label="Sign in"
            name="group1"
            type='radio'
            value="true" 
            onChange={(e)=>setSignedStatus(e.target.value)}
          />
           <Form.Check
            inline
            label="Not Sign in"
            name="group1"
            type='radio'
            value="false"
             onChange={(e)=>setSignedStatus(e.target.value)}
            
          />
      </Form.Group>
      

      <select style={{width:'8rem',borderRadius:'7px',borderBlockColor:'cyan'}}value={Role} onChange={(e)=>{
              setRole(e.target.value)
            }}>
  <span>Role</span>
  <option value=''>Select</option>
  <option
  value="Super admin">Super Admin</option>
  <option value="Only By Admin">Only By Admin</option>
  
</select><br></br>
 <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="number" placeholder="Phonenumber" onChange={(e)=>setPhonenumber(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={addclient}>
        Submit
      </Button>
    </Form>
    </Card>
    </>
    </div>
  )
}

export default Addclient