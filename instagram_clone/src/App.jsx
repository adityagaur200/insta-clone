import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './HomePage/HomePage'
import AuthPage from './components/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout'
import ProfilePage from './components/ProfilePage/ProfilePage'

export default function App() {
  return (
    <PageLayout>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AuthPage' element={<AuthPage/>}/>
        <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

