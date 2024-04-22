import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='container'>
      <motion.ul 
      initial={{opacity:0.3,scale:0.5}}
      animate={{opacity:1,scale:1}}
    transition={{duration:1}}
      className='navbar'>
        
        <li className='navhover'>Home</li>
        <li className='navhover'>Competitions</li>
        <li className='navhover'>Events</li>
        <li className='navhover'>Brochure</li>
        <li className='navhover'>Team</li>
        <li className='navhover'>Contact Us</li>
        <li className='navhover'>Sponsors</li>
        <li id='register'>Register</li>
      </motion.ul>

    </div>
  )
}

export default Navbar