import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePages/HomePage'
import AuthPage from './components/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout'

export default function App() {
  return (
    <PageLayout>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AuthPage' element={<AuthPage/>}/>
    </Routes>
    </PageLayout>
  )
}

