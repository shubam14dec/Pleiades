import React from 'react'
import './Special.css'
import { motion } from 'framer-motion'
import img from '../assets/music.png'

const Special = () => {
  const animation={
    hidden:{
      opacity:0,
      scale:0,
      x:-300
    },
    show:{
      opacity:1,
      scale:1,
      x:0,
      transition:{
        type:"spring",
        damping:20,
        duration:4,
      },
    },
  };
  return (
    <motion.div
    variants={animation}
    initial="hidden"
    whileInView="show"
    >
    <div className='events'>
      <img src={img} className='img1'></img>
      <div className='head1'>Description :-</div>
      <div className='description'>However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt ut id enim saepe facilis quibusdam fugiat ipsam labore hic. </div>
    </div>
    </motion.div>
  )
}

export default Special