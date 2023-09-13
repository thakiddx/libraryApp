import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id='app-container'>
      <Sidebar />
      <Routes>
        <Route path='/'
      </Routes>
      <div className='page-container'>
        I am Page
      </div>  
    </div>
  )
}

export default App
