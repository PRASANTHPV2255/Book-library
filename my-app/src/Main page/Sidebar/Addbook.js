import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import Sidebar from './Sidebar'
import swal from 'sweetalert'

function Addbook() {
    const [BookName, setBookName] = useState('')
    const [Language, setLanguage] = useState('')
    const [Author, setaAuthor] = useState('')
    const [Genre, setGenre] = useState('')
    const [Published, setPuPublished] = useState('')
    const [Price, setPrice] = useState('')
    const Quantity = 0
    const [Image, setImage] = useState('')

    
    const Convertimage=(e)=>{
      console.log(e.target.files[0]);
      const reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=()=> {
        console.log(reader.result);//base64encode string
        setImage(reader.result)
      }
      reader.onerror=(err)=>{
        console.log("error",err);
      }
    }

    const addBooks=async(event)=>{
        event.preventDefault();
       const api='http://localhost:4000/addbook';

       const addbook=await axios.post(api,{BookName,Language,Author,Genre,Published,Price,Quantity,Image})
       await console.log(addbook.data);
       if(addbook){
       await swal('Book Added',addbook.data.msg,'success')
       }else{
       await alert(addbook.data.msg)
       }
    }
    
   

  return (
    <div style={{display:'flex'}}>
       
        <>
        <Sidebar/>
        
        <Card  style={{ width: '26rem',marginLeft:'auto',marginRight:'auto',marginTop:'5rem',color:'black',height:'0'}}>
        <h3 style={{marginLeft:'8rem',color:'#A88987'}}><i>ADD BOOK</i></h3>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>BookName</Form.Label>
        <Form.Control type="text" placeholder="BookName" onChange={(e)=>setBookName(e.target.value)} />
        <Form.Label>Language</Form.Label>
        <Form.Control type="text" placeholder="Language" onChange={(e)=>setLanguage(e.target
        .value)}/>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author"  onChange={(e)=>setaAuthor(e.target.value)}/>
        <Form.Label>Genre</Form.Label>
        <Form.Control type="text" placeholder="Genre"onChange={(e)=>setGenre(e.target.value)} />
        <Form.Label>Published</Form.Label>
        <Form.Control type="text" placeholder="Published"onChange={(e)=>setPuPublished(e.target.value)} />
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price"onChange={(e)=>setPrice(e.target.value)} />
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" onChange={Convertimage}/>
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginLeft:'10rem'}} onClick={addBooks}>
        Submit
      </Button>
    </Form>
    </Card>
    </>
    </div>
  )
}

export default Addbook