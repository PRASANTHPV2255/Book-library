import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import swal from 'sweetalert'

function Editbook() {
    const nav=useNavigate()
   
    const [book, setbook] = useState([])

    const {id}=useParams()

  
    

    useEffect(() => {
        const api=`http://localhost:4000/find/${id}`
        axios.get(api).then(res=>{
            setbook(res.data.find)
            console.log(res.data.find);
        })
    
      
    }, [])

    const [BookName, setBookName] = useState(book.BookName)
    const [Language, setLanguage] = useState(book.Language)
    const [Author, setaAuthor] = useState(book.Author)
    const [Genre, setGenre] = useState(book.Genre)
    const [Published, setPuPublished] = useState(book.Published)
    const [Price, setPrice] = useState(book.Price)
    const Quantity =0
    const [Img, setImg] = useState(book.Img)

   const update=async(e)=>{
    e.preventDefault()
    const api=`http://localhost:4000/update/${id}`
    console.log(id);
    const updatebook=await axios.put(api,{BookName,Language,Author,Genre,Published,Price,Quantity,Img});
    await swal('BOOK UPDATED',updatebook.data.msg,'success')
    nav('/disbook')
   }
   
   
    

  return (
    
          <div style={{display:'flex'}}>
            
       
       <>
       <Sidebar/>
       
       <Card border="info" style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
       <h3 style={{marginLeft:'8rem',color:'darkkhaki'}}><i>EDIT BOOK </i></h3>
         <Form>
     <Form.Group className="mb-3" >
       <Form.Label>BookName</Form.Label>
       <Form.Control type="text" Value={book.BookName} onChange={(e)=>setBookName(e.target.value)} />
       <Form.Label>Language</Form.Label>
       <Form.Control type="text" Value={book.Language} onChange={(e)=>setLanguage(e.target
       .value)}/>
       <Form.Label>Author</Form.Label>
       <Form.Control type="text" Value={book.Author}  onChange={(e)=>setaAuthor(e.target.value)}/>
       <Form.Label>Genre</Form.Label>
       <Form.Control type="text" Value={book.Genre}onChange={(e)=>setGenre(e.target.value)} />
       <Form.Label>Published</Form.Label>
       <Form.Control type="text" Value={book.Published}onChange={(e)=>setPuPublished(e.target.value)} />
       <Form.Label>Price</Form.Label>
       <Form.Control type="text" Value={book.Price}onChange={(e)=>setPrice(e.target.value)} />
       {/* <Form.Label>Quantity</Form.Label>
       <Form.Control type="text" Value={book.Quantity} onChange={(e)=>setQuantity(e.target.value)}/> */}
     </Form.Group>
     <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={update}>
       Update
     </Button>
   </Form>
   </Card>
   </>
   </div>
    
  )
}

export default Editbook