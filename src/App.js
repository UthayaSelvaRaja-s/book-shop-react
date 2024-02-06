import React from 'react';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Main from './mainPage';
import logo from './logo.svg';
import UserLogin from './login';
import Cardlist from './Cardlist';
import AboutCard from './aboutCard';
import './App.css'
function App() {
  let[bookDash,setBookDash]=useState(false)
  return (
    <div className="App">
      
      <Routes>
        {<Route path='/login' element={<UserLogin next={bookDash} nextPage={setBookDash}></UserLogin>}></Route>}
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/about' element={<AboutCard></AboutCard>}></Route>
        </Routes>

     
    </div>
  );
}

export default App;
