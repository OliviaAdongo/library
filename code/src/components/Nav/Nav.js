import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from '../../pages/SignIn/SignIn';
import Home  from '../../pages/Home/Home';
import Messages from '../../pages/Messages/Messages';
import ErrorPage from '../../pages/ErrorPage';
import Admin from '../../pages/Admin/Admin';
import Cat from '../../pages/Cat/Cat';

function Nav() {
  return (
    <Router>

    <nav style={
    {
    background: 'white', 
    height: 35, 
    fontSize :17, 
    fontWeight: 'bold', 
    alignContent: 'center'
    }}>

   <Link to='/home'> Home </Link>
   <Link to='/'> SignIn </Link>
   <Link to='/admin'> Admin</Link>
   <Link to='/cat' > Cat </Link>
   <Link to='/message'> Message </Link>

    </nav>
    <Routes> 
    {/* Used instead of switch */}
    <Route path='/' element={<SignIn/>}/>
    {/* main page of the route */}
    <Route path='/home' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/cat' element={<Cat/>}/>
    <Route path='/message' element={<Messages/>}/>
    <Route path ='*' element={<ErrorPage/>}/>
    
    </Routes>
    </Router>
  );
}

export default Nav;
