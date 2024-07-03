import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePages/HomePage'
import AuthPage from './AuthPage/AuthPage'

export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AuthPage' element={<AuthPage/>}/>
    </Routes>
    </>
  )
}

