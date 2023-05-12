
import React from 'react'
import {  Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { GiEvilBook, GiHumanPyramid } from "react-icons/gi";
import { RxPerson } from "react-icons/rx";
import { IoIosPeople} from "react-icons/io";
import { GoListOrdered, GoSignOut } from "react-icons/go";
import { BiBookAdd } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
import { VscPersonAdd } from "react-icons/vsc";
import './Dispage.css'
import { HiOutlineUserAdd } from 'react-icons/hi';
import { IconName, MdOutlineAddShoppingCart } from "react-icons/md";




function Sidebar() {
  
  const nav=useNavigate()

  const addbook=()=>{
    nav('/addbook')
  }
  const book=()=>{
    nav('/disbook')
  }
  const logout=()=>{
    nav('/home')
  }
  const addclient=()=>{
    nav('/addclient')
  }
  const disclient=()=>{
    nav('/disclient')
  }
  const addcustemer=()=>{
    nav('/addcustemer')
  }
  const Discustemer=()=>{
    nav('/Discustemer')
  }
  const Dismember=()=>{
    nav('/dismember')
  }
  const addmember=()=>{
    nav('/addmember')
  }
  const Disorder=()=>{
    nav('/disorder')
  }
  const createorder=()=>{
    nav('/createorder')
  } 
  
    return (
      <div>
   
   <Nav  className="logout">
    
    <div>
      <Nav.Link className='hovereffect' onClick={book}  ><GiEvilBook style={{marginRight:'1rem'}}/>BOOKS</Nav.Link>

      <Nav.Link onClick={addbook}className='hovereffect'><BiBookAdd style={{marginRight:'1rem'}}/>ADD BOOK</Nav.Link>

      <Nav.Link onClick={disclient}className='hovereffect'><RxPerson style={{marginRight:'1rem'}}/>CLIENTS</Nav.Link>

      <Nav.Link onClick={addclient}className='hovereffect'><ImUserPlus style={{marginRight:'1rem'}}/>ADD CLIENT</Nav.Link>

      <Nav.Link onClick={Discustemer}className='hovereffect'><IoIosPeople style={{marginRight:'1rem'}}/>CUSTEMERS</Nav.Link>

      <Nav.Link onClick={addcustemer}className='hovereffect'><VscPersonAdd style={{marginRight:'1rem'}}/>ADD CUSTEMER</Nav.Link>

      
      <Nav.Link onClick={Dismember} className='hovereffect'><GiHumanPyramid style={{marginRight:'1rem'}}/>MEMBERS</Nav.Link>

      <Nav.Link onClick={addmember} className='hovereffect'><HiOutlineUserAdd style={{marginRight:'1rem'}}/>ADD MEMBER</Nav.Link>

      <Nav.Link onClick={Disorder} className='hovereffect'><GoListOrdered style={{marginRight:'1rem'}}/>ORDERS</Nav.Link>

      <Nav.Link onClick={createorder} className='hovereffect'><MdOutlineAddShoppingCart style={{marginRight:'1rem'}}/>CREATE ORDERS</Nav.Link>


     </div>


     <div>
      <Nav.Link onClick={logout} style={{color:'#A4EB34'}}><GoSignOut style={{marginRight:'1rem'}}/>Logout</Nav.Link>
      </div>
      
    </Nav>
    
  </div>
    )
}

export default Sidebar