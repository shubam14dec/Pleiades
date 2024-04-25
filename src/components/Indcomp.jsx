import React from 'react'
import './Indcomp.css'
import { motion } from 'framer-motion'
import img from '../assets/dance.png'

const Indcomp = (props) => {
    let data = props.data;
  
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
        // duration:0.6
      },
    },
  };
  return (
    <motion.div
    variants={animation}
    initial="hidden"
    whileInView="show"
    >
    <div className='eve1'>
        <img src={data.img} className='img'></img>
        <div className='eve1heading'>
        <div className='head1'>{data.title}</div>
        <div className='description'>{data.description}</div>
        </div>
        
    </div>
    
    </motion.div>
  )
}

export default Indcomp