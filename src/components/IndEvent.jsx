import React from 'react'
import './IndEvent.css'
import { motion } from 'framer-motion'
import img from '../assets/dance.png'

const IndEvent = () => {
  
  const animation={
    hidden:{
      opacity:0,
      scale:0,
      x:300
    },
    show:{
      opacity:1,
      scale:1,
      x:0,
      transition:{
        type:"spring",
        damping:10,
        duration:0.6,
      },
    },
  };
  return (
    <motion.div
    variants={animation}
    initial="hidden"
    whileInView="show"
    >
    <div className='event'>
        <img src={img} className='img'></img>
        <div className='head1'>Description :-</div>
        <div className='description'>However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, unde. </div>
    </div>
    
    </motion.div>
  )
}

export default IndEvent