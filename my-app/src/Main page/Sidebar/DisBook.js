import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar'
import ReactPaginate from 'react-paginate'
import './Dispage.css'

function DisBook() {
  const nav=useNavigate()
    const [bookdetails,setbookdetails] = useState([])
    const api='http://localhost:4000/disbook';

    useEffect(() => {
      axios.get(api).then(Response=>{
        setbookdetails(Response.data)
      }).catch
      (err=>console.log(err))
    }, [])
    console.log(bookdetails);
  
      //Delete book

    const deletebook=async(_id)=>{
      const deleteapi=`http://localhost:4000/remove/${_id}`
      await axios.delete(deleteapi).then((res)=>{
         setbookdetails(res.data.books)  //books is veriable store datas after deletion
         console.log(res.data.books);
         swal('book deleted',res.data.msg,"success")
         
         
        
      })
    }
    const edit=(_id)=>{
      nav(`/editbook/${_id}`)
    }
    const view=(_id)=>{
      nav(`/viewbook/${_id}`)
    }

    //Search book
    const [searchbook, setsearchbook] = useState('')
    const filterbook = bookdetails.filter((bd) =>
  bd.BookName.toLowerCase().includes(searchbook.toLowerCase())
);

//Pagenation

const [Pagenumber, setPagenumber] = useState(0)

const itemsperpage=5;
const pageclick=Pagenumber * itemsperpage;


const totalPages=Math.ceil(bookdetails.length / itemsperpage)
const changepage=({selected})=>{
  setPagenumber(selected);

 }


  return (
    <div style={{display:'flex',height:'100%'}}>

     <Sidebar/>
    
     <div style={{marginLeft:'auto',marginRight:'auto'}}>
     <Form className="d-flex" style={{width:'22rem',marginLeft:'48rem',marginTop:'5rem'}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setsearchbook(e.target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
       <Table striped bordered hover style={{marginTop:'10px',borderBlockEndColor:'#63DBA3'}}>
        <thead>
        <tr style={{textAlign:'center'}}>
            <th>Image</th>
            <th>BookName</th>
            <th>Language</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Published</th>
            <th>Price</th>
            <th>CRED</th>
        </tr>
        </thead>
        <tbody>
        {filterbook.slice(pageclick,pageclick+itemsperpage).map((e,index)=>
            <tr key={index}>
            <td><img width={40} src={e.Image}></img></td>
            <td>{e.BookName}</td>
            <td>{e.Language}</td>
            <td>{e.Author}</td>
            <td>{e.Genre}</td>
            <td>{e.Published}</td>
            <td>{e.Price}</td>
            <td>
              <Button style={{marginLeft:'12px'}}variant="outline-warning" onClick={()=>view(e._id)}>view</Button>
            <Button style={{marginLeft:'12px'}}variant="outline-success" onClick={()=>edit(e._id)}>Edit</Button>
            <Button style={{marginLeft:'12px'}}variant="outline-danger" onClick={()=>deletebook(e._id)}>Delete</Button>
            </td>
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

export default DisBook