import React from 'react'
import './Intro.css'
import img1 from '../assets/final_logo.png'
import { motion ,Variants} from 'framer-motion'

const fadeinanimation={
hidden:{
  opacity:0,
  y:100,
},
show:{
  opacity:1,
  y:0,
  transition:{
    staggerChildren:0.5,
    duration:1.5,
  },
},
img1:{
  opacity:0,
  y:-100,
  x:900,
  scale:5
},

img2:{
  opacity:1,
  y:-25,
  x:-20,
  scale:1.1,
  transition:{
    type:"spring",
    velocity:50,
    stiffness:60,
    damping:10,
  }
}
};

const Intro = () => {
  return (
    <div className='intro'>
        <motion.img 
        variants={fadeinanimation}
        initial="img1"
        animate="img2"
        className="pleadies" src={img1} alt="logo" />

        <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeinanimation}
        className='textclass'>
        <motion.div
            variants={fadeinanimation}
            className='heading1'>PLEIADES X SPARSH
            </motion.div>

            <motion.p
            variants={fadeinanimation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, explicabo earum? Earum, eum nulla? Neque corrupti, iure modi doloremque unde ab en!
            </motion.p>
            <motion.p
            variants={fadeinanimation}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores fugiat voluptatum nam sunt voluptatibus sequi doloremque quod eos. Sint, commodi veritatis. Exercitationem ducimus cum 
            labore iusto! Sint magnam, eos necessitatibus minus dolore consequatur magni tempora at beatae, enim ad rerum est eum earum laudantium voluptatibus ut itaque accusamus similique corporis nemo.
            </motion.p>
        </motion.div>
    </div>
  )
}

export default Intro