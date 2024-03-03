import React from 'react'
import { SideBar } from './components/SideBar'
import { ContentWrapper } from './components/ContentWrapper'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { GenresInDB } from './components/GenresInDB'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <Routes>
        <Route path='/' element ={<ContentWrapper />}/>
        <Route path='/genre' element={<GenresInDB />} />
      </Routes>
      <Footer/>
    </div>
  )
}
