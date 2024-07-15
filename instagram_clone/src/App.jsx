import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import HomePage from './HomePage/HomePage'
import AuthPage from './components/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout'
import ProfilePage from './components/ProfilePage/ProfilePage'
import useAuthStore from './store/authStore'

export default function App() {
  const authUser = useAuthStore(state => state.user);
  return (
    <PageLayout>
    <Routes>
        <Route path='/' element={authUser?<HomePage/>: <Navigate to='/AuthPage'/>}/>
        <Route path='/AuthPage' element={!authUser?<AuthPage/>:<Navigate to='/'/>}/>
        <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

