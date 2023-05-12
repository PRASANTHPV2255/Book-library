import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Sidebar from './Sidebar'

function DisClient() {
  
  
const nav=useNavigate()

//Display Client details
const [Clientdetails, setClientdetails] = useState([])

const api='http://localhost:4000/disclient';

useEffect(() => {
    axios.get(api).then(res=>{
        setClientdetails(res.data)
    }).catch
    (err=>console.log(err))
   
}, [])
console.log(Clientdetails);

//Delete client details

const deleteclient=async(_id)=>{
  const deleteclientapi=`http://localhost:4000/deleteclient/${_id}
  `
  await axios.delete(deleteclientapi).then((res)=>{
    setClientdetails(res.data.clients)
    swal('client deleted',res.data.msg,'success')
  })

 
}

const update=(_id)=>{
   nav(`/update/${_id}`)
}
const viewclient=(_id)=>{
  nav(`/viewclient/${_id}`)
}
 //Serch client
 const [searchclient,setsearchclient] = useState('')

const filtereclient = Clientdetails.filter((cl) =>
  cl.Name.toLowerCase().includes(searchclient.toLowerCase())
);

// Client Pagenation

const [Pagenumber, setPagenumber] = useState(0)

const itemsperpage=5;
const pageclick=Pagenumber * itemsperpage;


const totalPages=Math.ceil(Clientdetails.length / itemsperpage)
const changepage=({selected})=>{
  setPagenumber(selected);

 }

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        
       <div  style={{marginLeft:'auto',marginRight:'auto'}}>
       <Form className="d-flex" style={{width:'20rem',marginLeft:'38rem',marginTop:'5rem'}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setsearchclient(e.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>

        <Table striped bordered hover responsive style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
            <thead>
            <tr>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Client status</th>
              <th>Client Role</th>
              <th>Client phonenumber</th>
              <th>Client CRED</th>
            </tr>
            </thead>
            <tbody>
            {filtereclient.slice(pageclick,pageclick+itemsperpage).map((e,index)=>
            <tr key={index}>
             <td>{e.Name}</td>
             <td>{e.Email}</td>
             <td>{e.SignedStatus  ? 'Sign in' : 'Not Sign in'}</td>
             <td>{e.Role}</td>
             <td>{e.Phonenumber}</td>
             <td>
              <Button style={{marginLeft:'12px'}}variant="outline-warning" onClick={()=>viewclient(e._id)} >view</Button>
            <Button style={{marginLeft:'12px'}}variant="outline-success" onClick={()=>update(e._id)}>Edit</Button>
            <Button style={{marginLeft:'12px'}}variant="outline-danger" onClick={()=>deleteclient(e._id)} >Delete</Button></td>
         </tr>
        
            )}
             </tbody>
           

        </Table>
        <ReactPaginate
  previousLabel={"Previous"} 
  nextLabel={"Next"}
  pageCount={totalPages}
  onPageChange={changepage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
activeClassName={"paginationActive"}
disabledClassName={"paginationDisabled "}

  />
 
  
       </div>

    </div>
  )
}

export default DisClient