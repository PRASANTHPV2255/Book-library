import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Form, Table } from 'react-bootstrap'
import axios from 'axios';
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';



function Discustemer() {
  const nav=useNavigate()
    //Display Custemer
    const [custemerdeteils, setcustemerdeleils] = useState([])

    const api='http://localhost:4000/custemer';

     
    useEffect(() => {

     axios.get(api).then(res=>{
        setcustemerdeleils(res.data)
     })
    
     
    }, [])
    console.log(custemerdeteils);

    //Search custemer
    const [searchcustemer, setsearchcustemer] = useState('')

    const filtercustemer = custemerdeteils.filter((cl) =>
  cl.Name.toLowerCase().includes(searchcustemer.toLowerCase())
);


    //Delete custemer
    
    const deletecustemer=async(_id)=>{
    const deleteapi=`http://localhost:4000/delcustemer/${_id}`
      
    if(window.confirm('Are you sure to delete this data?')){

     axios.delete(deleteapi).then((res)=>{
       setcustemerdeleils(res.data.displaycustemer)
       
      swal('Data deleted',res.data.msg,'success')
     })
    }
    }

    //Update custemer
   
     const updatecustomer=(_id)=>{
      nav(`/updatecustomer/${_id}`)
     }

     //View customer
     const viewcustomer=(id)=>{
      nav(`/viewcustomer/${id}`)
     }



  return (

    <div style={{display:'flex'}}>

        <Sidebar/>
        <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'2re  m'}}>
         
        <Form className="d-flex" style={{width:'20rem',marginLeft:'53rem',marginTop:'5rem'}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setsearchcustemer(e.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            <div>
        <Table striped bordered hover responsive style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
            <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>PinCode</th>
              <th>Country</th>
              <th>Customer CRED</th>
            </tr>
            </thead>
            <tbody>
             {filtercustemer.map((e)=>
            <tr key={e._id}>
             <td>{e.Name}</td>
             <td>{e.Email}</td>
             <td>{e.AddressLine1}</td>
             <td>{e.City}</td>
             <td>{e.State}</td>
             <td>{e.PinCode}</td>
             <td>{e.Country}</td>
             <td>
             <FaEye style={{width:'20px',height:'20px',marginLeft:'1rem',color:'#63DBA3',}} onClick={()=>viewcustomer(e._id)}/>

            <FaEdit style={{width:'20px',height:'20px',marginLeft:'1rem'}} onClick={()=>updatecustomer(e._id)}/>

            <FaRegTrashAlt style={{width:'20px',height:'20px',color:'#6E0C05',marginLeft:'1rem'}} onClick={()=>deletecustemer(e._id)}/>
            </td>
         </tr>
        
            )}
             </tbody>
           </Table>
            </div>

           </div>
    </div>
  )
}

export default Discustemer