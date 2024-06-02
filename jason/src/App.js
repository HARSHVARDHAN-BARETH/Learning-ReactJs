import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Header/>}></Route>
        <Route  path='/pieChart' element={<Pie/>}></Route>
      </Routes>
    </div>
  )
}

export default App
