import React from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
      <motion.ul 
      initial={{opacity:0,scale:0.2,y:-60}}
      animate={{opacity:1,scale:1,y:0}}
    transition={{duration:1.5,delay:0.5}}
      className='flex justify-center items-center gap-20 font-bold text-lg p-4 max-[420px]:text-2xl
       text-white rounded-[20rem] px-[3rem] py-[0.5rem] mt-[2rem] z-10 navbar'>
        
        <li className='navhover'><Link to={"/"}>Home</Link></li>
        <li className='navhover'><Link to={"/competition"}>Competitions</Link></li>
        <li className='navhover'><Link to={"/event"}>Events</Link></li>
        <li className='navhover'><Link to={"/brochure"}>Brochure</Link></li>
        <li className='navhover'><Link to={"/team"}>Team</Link></li>
        <li className='navhover'><Link to={"/contactus"}>Contact Us</Link></li>
        <li className='navhover'><Link to={"/sponsors"}>Sponsors</Link></li>
        <li id='register'><Link to={"/pricing"}>Register</Link></li>
      </motion.ul>


    </div>
  )
}

export default Navbar