import React from 'react'
import './Stickimg.css'
import img2 from '../assets/firesvg.svg'
import img3 from '../assets/image3.PNG'
import img4 from '../assets/image4.png'
import { motion } from 'framer-motion'


const Stickimg = () => {
  return (
    <div className='stickimg'>
         <img className='gofor1' src={img2} alt="fire" />
        <motion.img 
        initial={{y:-450}}
        animate={{y:0,rotate:70}}
        transition={{duration:1.5}}
        className='gofor2' src={img3} alt="fire" />

        <motion.img 
        initial={{rotate:0}}
        animate={{rotate:360}}
        transition={{duration:10,repeat:10}}
        className='gofor3' src={img4} alt="fire" />
        
    </div>
  )
}

export default Stickimg