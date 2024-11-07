import React from 'react'
import Home from './Componets/Home'
import { Routes, Route } from 'react-router-dom'
import OurMenu from './Componets/OurMenu'
import Pages from './Componets/Pages'
import Gallary from './Componets/Gallary'
import OrderForm from './Componets/OrderForm'
import Location from './Componets/Location'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OurMenu' element={<OurMenu/>}/>
        <Route path='/Pages' element={<Pages/>}/>
        <Route path='/Gallary' element={<Gallary/>}/>
        <Route path='/OrderNow' element={<OrderForm/>}/>
        <Route path='/Location' element={<Location/>}/>
      </Routes>
    </>
  )
}

export default App