import axios from 'axios';
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Singlebook({book}) {

  const handlecart=(id)=>{
     const bookid=id;
     const userId=localStorage.getItem('userId')

     const api='http://localhost:4000/addtocart';

     const data={bookid,userId}
     axios.put(api,data).then((res)=>{
      console.log(res.data);
      toast.success(`${book.BookName} Added`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
     })
  }


  return (
    <div style={{marginTop:'1rem'}}>
        {
          <Card style={{ width: '23rem',height:'31rem',backgroundColor:'#7D7C7C' }}>
          <Card.Img variant="top" style={{widows:'10rem',height:'12rem'}} src={book.Image} />
          <Card.Body>
            <Card.Title>{book.BookName}</Card.Title>
            <Card.Text><b>Language:</b>{book.Language}</Card.Text>
          <Card.Text><b>Author:</b>{book.Author}</Card.Text>
          <Card.Text><b>Genre:</b>{book.Genre}</Card.Text>
          <Card.Text><b>Published:</b>{book.Published}</Card.Text>
          <Card.Text><b>$:</b>{book.Price}</Card.Text>
  
            <Button variant="primary" style={{marginLeft:'6.5rem'}} onClick={()=>handlecart(book._id)}>+ Add To Cart</Button>
          </Card.Body>
        </Card>
       
       
}
<ToastContainer />
    </div>
  )
}

export default Singlebook