import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/register'} element={<Signup/>}/>
        <Route path={'/login'} element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}