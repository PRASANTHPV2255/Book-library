import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function Updatecustomer() {
     
    const nav=useNavigate()

    //finding the single data
    const [customer,setcustomer] = useState([])

    const {id}=useParams()

    useEffect(() => {
     
        const api=`http://localhost:4000/findsingle/${id}`;

        axios.get(api).then(res=>{
            setcustomer(res.data)
            console.log(res.data);
        })
    }, [])

    //updating the data

    const [Name, setName] = useState(customer.Name)
    const [Email, setEmail] = useState(customer.Email)
    const [AddressLine1, setAddressLine1] = useState(customer.AddressLine1)
    const [City, setCity] = useState(customer.City)
    const [State, setState] = useState(customer.State)
    const [PinCode, setPinCode] = useState(customer.PinCode)
    const [Country, setCountry] = useState(customer.Country)

    const updatecustomer=async(e)=>{

        e.preventDefault()
        const api=`http://localhost:4000/custemerupdate/${id}`;

        const update=await axios.put(api,{Name,Email,AddressLine1,City,State,PinCode,Country})
        
        await swal('Customer updated',update.data.msg,'success')
       //await alert(update.data.msg)
        nav('/Discustemer')

    }

    

  return (

    <div style={{display:'flex'}}>
        <Sidebar/>

        <Card border="info" style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
       <h3 style={{marginLeft:'5rem',color:'darkkhaki'}}><i>UPDATE CUSTOMER </i></h3>
         <Form>
     <Form.Group className="mb-3" >
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" Value={customer.Name} onChange={(e)=>setName(e.target.value)} />

       <Form.Label>Email</Form.Label>
       <Form.Control type="text" Value={customer.Email} onChange={(e)=>setEmail(e.target
       .value)}/>

       <Form.Label>Address</Form.Label>
       <Form.Control type="text" Value={customer.AddressLine1}  onChange={(e)=>setAddressLine1(e.target.value)}/>

       <Form.Label>City</Form.Label>
       <Form.Control type="text" Value={customer.City}onChange={(e)=>setCity(e.target.value)} />

       <Form.Label>State</Form.Label>
       <Form.Control type="text" Value={customer.State}onChange={(e)=>setState(e.target.value)} />

       <Form.Label>PinCode</Form.Label>
       <Form.Control type="text" Value={customer.PinCode} onChange={(e)=>setPinCode(e.target.value)}/>

       <Form.Label>Country</Form.Label>
       <Form.Control type="text" Value={customer.Country} onChange={(e)=>setCountry(e.target.value)}/>
     </Form.Group>

     <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={updatecustomer}>
       Update
     </Button>
   </Form>
   </Card>
    </div>
  )
}

export default Updatecustomer