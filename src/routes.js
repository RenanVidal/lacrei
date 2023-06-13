import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Baseboard';
import Professional from './pages/Professional';
import User from './pages/UserPerson';
import Home from './pages/Home';
import './styles/globalStyles.css';

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />}/> 
        <Route path="/user-person" element={<User/>}/>
        <Route path="/professional" element={<Professional/>}/>
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

