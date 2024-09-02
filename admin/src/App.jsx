import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content flex">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/add' element={<List/>}/>
          <Route path='/add' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
