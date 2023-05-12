import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Table } from 'react-bootstrap'
import { FaEdit, FaEye, FaRegTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'


function Disorder() {
    const nav=useNavigate()

    const [order, setorder] = useState([])

    useEffect(() => {
      
        const api='http://localhost:4000/orderdetails'

        axios.get(api).then(res=>{
            setorder(res.data)
            
        })
    }, [])
    //console.log(order);

    //Delete order

    const deleteorder=async(_id)=>{

        const api=`http://localhost:4000/deleteorder/${_id}`;

        if(window.confirm('Are you sure to delete this order?')){
        await axios.delete(api).then(res=>{
            setorder(res.data.displaydata)
             swal('Order Deleted',res.data.msg,'success')
        })
    }
       
    }

   
//View Single Order

    const vieworder=(id)=>{
        nav(`/vieworder/${id}`)
    }

    //Update order

    const update=(id)=>{
        nav(`/updateorder/${id}`)
    }
    

  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <div className='Table'>
        <Table striped bordered hover responsive style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
            <thead style={{color:'#A18F5F',border:'#3D3846'}}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>OrderId</th>
              <th>ProductNumber</th>
              <th>Order Date</th>
              <th>CRED</th>
            </tr>
            </thead>
            <tbody>
              {order.map((e)=>
            <tr key={e._id}>
             <td>{e.FirstName}</td>
             <td>{e.LastName}</td>
             <td>{e.OrderId}</td>
             <td>{e.ProductNumber}</td>
             <td>{e.Date}</td>
             <td>
             <FaEye onClick={()=>vieworder(e._id)} style={{width:'20px',height:'20px',marginLeft:'1rem',color:'#63DBA3'}}/>

<FaEdit onClick={()=>update(e._id)} style={{width:'20px',height:'20px',marginLeft:'1rem'}}/>

<FaRegTrashAlt onClick={()=>deleteorder(e._id)} style={{width:'20px',height:'20px',color:'#6E0C05',marginLeft:'1rem'}}/>
</td>
         </tr>
        
      )}
             </tbody>
           

        </Table>
        </div>
    </div>
  )
}

export default Disorder