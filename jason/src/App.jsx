import React from 'react'
import FetchData from './FetchData'
import Pie from './components/charts/Pie'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Barr from './components/charts/Bar'
import Horizontal from './components/charts/Horizontal'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/pieChart' element={<Pie/>}></Route>
        <Route path='/FetchData' element={<FetchData/>}></Route>
        <Route path='/Bar' element={<Barr/>}></Route>
        <Route path='/Horizontal' element={<Horizontal/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
