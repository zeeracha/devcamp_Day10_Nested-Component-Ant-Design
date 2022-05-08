import React from 'react'
import "./Navbar.css"

const NavbarComp = () => {
  return (
    <div>
        
      <ul className='Navbar'>
  
        <li><img src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png" height={50} weight={50} alt="My Awesome Image"/></li>
        <li className='CreatePikka'>Create Pikka</li>
        <li className='CreatePikka'>Sign Up</li>
        <li className='CreatePikka'>Sign In</li>
        <li className='CreatePikka'>Sign Out</li>
      </ul>
    </div>

  )
}

export default NavbarComp;