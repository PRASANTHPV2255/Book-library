import React from "react";
import './App.css'
import Navebar from "./Navebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Navbar components/Login";
import Home from "./Navbar components/Home";
import Register from "./Navbar components/Register";


import Addbook from "./Main page/Sidebar/Addbook";
import DisBook from "./Main page/Sidebar/DisBook";
import Sidebar from "./Main page/Sidebar/Sidebar";
import Editbook from "./Main page/Sidebar/Editbook";
import Viewbook from "./Main page/Sidebar/Viewbook";
import Addclient from "./Main page/Sidebar/Addclient";
import DisClient from "./Main page/Sidebar/DisClient";
import Updateclient from "./Main page/Sidebar/Updateclient";
import Viewclient from "./Main page/Sidebar/Viewclient";
import Addcustemer from "./Main page/Sidebar/Addcustemer";
import Discustemer from "./Main page/Sidebar/Discustemer";
import Updatecustomer from "./Main page/Sidebar/Updatecustomer";
import Viewcustomer from "./Main page/Sidebar/Viewcustomer";
import Dismember from "./Main page/Sidebar/Dismember";
import Addmember from "./Main page/Sidebar/Addmember";
import Viewmember from "./Main page/Sidebar/Viewmember";
import Updatemember from "./Main page/Sidebar/Updatemember";
import Disorder from "./Main page/Sidebar/Disorder";
import Addorder from "./Main page/Sidebar/Addorder";
import Vieworder from "./Main page/Sidebar/Vieworder";
import Updateorder from "./Main page/Sidebar/Updateorder";
import Userlogin from "./Navbar components/Userlogin";
import Addingtocart from "./Addtocart/Addingtocart";
import Shop from "./Addtocart/Shop";




function App() {
  return (
    <div className="app">
       
      <BrowserRouter>
      {/* <Navebar/>  */}
        {<Sidebar/> ? " "  :  <Navebar/> }
    
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/userlogin' element={<Userlogin/>}/>
       

       <Route path='/main' element={<Sidebar/>}/>

       <Route path='/addbook' element={<Addbook/>}/>
       <Route path='/disbook' element={<DisBook/>}/>
       <Route path='/editbook/:id' element={<Editbook/>}/>
       <Route path='/viewbook/:id' element={<Viewbook/>}/>

       <Route path='/addclient' element={<Addclient/>}/>
       <Route path='/disclient' element={<DisClient/>}/>
       <Route path='/update/:id' element={<Updateclient/>}/>
       <Route path='/viewclient/:id' element={<Viewclient/>}/>

       <Route path='/addcustemer' element={<Addcustemer/>}/>
       <Route path='/Discustemer' element={<Discustemer/>}/>
       <Route path='/updatecustomer/:id' element={<Updatecustomer/>}/>
       <Route path="/viewcustomer/:id" element={<Viewcustomer/>}/>

       <Route path='/dismember' element={<Dismember/>}/>
       <Route path='/addmember' element={<Addmember/>}/>
       <Route path='/viewmember/:id' element={<Viewmember/>}/>
       <Route path='/updatemember/:id' element={<Updatemember/>}/>

       <Route path='/disorder' element={<Disorder/>}/>
       <Route path="/createorder" element={<Addorder/>}/>
       <Route path='/vieworder/:id' element={<Vieworder/>}/>
       <Route path="/updateorder/:id" element={<Updateorder/>}/>

       <Route path='/bookshop' element={<Shop/>}/>
       <Route path='/cart' element={<Addingtocart/>}/>
       


        
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
