import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Nav from './components/Nav'
import "./global.css"
import Product from './components/Product'
import Cart from "./components/Cart"
import Update from './components/Update'

const App = () => {
  return (
 
       <Router>
           <Nav />
           <Routes>
              <Route path='/' element={<Product />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/update/:id' element={<Update/>} />
           </Routes>
       </Router>
    
  )
}

export default App
