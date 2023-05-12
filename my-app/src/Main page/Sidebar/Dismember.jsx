
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Button, Table } from 'react-bootstrap'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";

function Dismember() {
  
  const [memberdetails, setmemberdetails] = useState([])

  const api='http://localhost:4000/displaymember';

  useEffect(() => {

    axios.get(api).then(res=>{
      setmemberdetails(res.data)
    })
  
  }, [])
  console.log(memberdetails);

  
  
  //Delete member

  const deletemember=async(_id)=>{
    const delapi=`http://localhost:4000/deletemember/${_id}`;

    if(window.confirm('Are you sure to delete this?')){
    await axios.delete(delapi).then((res)=>{
      setmemberdetails(res.data.displaymember)
       swal('Member Deleted',res.data.msg,'success')
    })
  }
    }

    const nav=useNavigate()

    const viewmember=(id)=>{
      nav(`/viewmember/${id}`)
    }

    const updatemember=(id)=>{
      nav(`/updatemember/${id}`)
    }




  return (

    <div style={{display:'flex'}}>
        <Sidebar/>
        <div className='Table'>
        <Table striped bordered hover responsive style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
            <thead style={{color:'#A18F5F'}}>
            <tr>
              <th>Member Name</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>Description</th>
              <th>Role</th>
              <th>PhoneNumber</th>
              <th>CRED</th>
            </tr>
            </thead>
            <tbody>
              {memberdetails?.map((e)=>
            <tr key={e._id}>
             <td>{e.Name}</td>
             <td>{e.Email}</td>
             <td>{e.DateOfBirth}</td>
             <td>{e.Gender  ? 'Male' : 'Female'}</td>
             <td>{e.Description}</td>
             <td>{e.Role}</td>
             <td>{e.PhoneNumber}</td>
             <td>
             <FaEye style={{width:'20px',height:'20px',marginLeft:'1rem',color:'#63DBA3',}} onClick={()=>viewmember(e._id)}/>

<FaEdit style={{width:'20px',height:'20px',marginLeft:'1rem'}} onClick={()=>updatemember(e._id)}/>

<FaRegTrashAlt style={{width:'20px',height:'20px',color:'#6E0C05',marginLeft:'1rem'}} onClick={()=>deletemember(e._id)}/>
</td>
         </tr>
        
      )}
             </tbody>
           

        </Table>
        </div>
    </div>
  )
}

export default Dismember