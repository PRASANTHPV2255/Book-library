import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Sidebar from './Sidebar'

function Updateclient() {

  const nav=useNavigate()
  const [client, setclient] = useState([])

  const {id}=useParams()

  useEffect(() => {
   const api=`http://localhost:4000/findclient/${id}`
   axios.get(api).then(res=>{
    setclient(res.data)
    console.log(res.data);
   })
  }, [id])
  

  const [Name, setName] = useState(client.Name)
    const [Email, setEmail] = useState(client.Email)
    const [SignedStatus, setSignedStatus] = useState(client.SignedStatus)
    const [Role, setRole] = useState(client.Role)
    const [Phonenumber, setPhonenumber] = useState(client.Phonenumber)
   
    //update client
    const clientupdate=async(event)=>{
      event.preventDefault()
      const api=`http://localhost:4000/updateclient/${id}`
      const updateclient=await axios.put(api,{Name,Email,SignedStatus,Role,Phonenumber})
      swal('Client updated',updateclient.data.msg,'success')
      nav('/disclient')
    }

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <Card border="info" style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'cyan',height:'0'}}>
        <h3 style={{marginLeft:'8rem'}}><i>Edit Client</i></h3>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" Value={client.Name} onChange={(e)=>setName(e.target.value)}/>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" Value={client.Email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Group>
      <Form.Label style={{paddingRight:'2rem'}}>SignedStatus: </Form.Label>
      <Form.Check
            inline
            label="Sign in"
            name="group1"
            type='radio'
            value={client.SignedStatus} 
            defaultChecked={client.SignedStatus}
            onChange={(e)=>setSignedStatus(e.target.value)}
          />
           <Form.Check
            inline
            label="Not Sign in"
            name="group1"
            type='radio'
            value={client.SignedStatus}
            defaultChecked={!client.SignedStatus}
             onChange={(e)=>setSignedStatus(e.target.value)}
            
          />
      </Form.Group>
     

      <select style={{width:'8rem',borderRadius:'7px',borderBlockColor:'cyan'}} onChange={(e)=>{
              setRole(e.target.value)
            }}>
  <span>Role</span>
  <option value=''>Select</option>
  <option selected={client.Role==='Super admin'}
  value="Super admin">Super Admin</option>
  <option selected={client.Role==='Only By Admin'} value="Only By Admin">Only By Admin</option>
  
</select><br></br>
 <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="text" Value={client.Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={clientupdate}>
        Submit
      </Button>
    </Form>
    </Card>
    </div>
  )
}

export default Updateclient