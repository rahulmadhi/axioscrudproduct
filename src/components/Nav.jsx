import React from 'react'
import  {RxHamburgerMenu} from "react-icons/rx"
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav>
       <div className='mainblock'>
        <div>
                <header>
                <img src="https://mahootspirits.com/wp-content/uploads/2021/03/OldMonkXXL_HighContrast_Product-768x768.png" alt="" />
                <h2>MONK STORE</h2>    
                </header>         
        </div>
        <div>
            <ol>
                <li>
                <Link to='/'>Products</Link>
                </li>
                <li>
                   <Link to='/cart'>Cart</Link>
                </li>
                <li><a href=""> <RxHamburgerMenu /> </a></li>
            </ol>
            </div>
       </div>
    </nav>
  )
}

export default Nav
