import React from 'react'
import './Competitions.css'
import { motion } from 'framer-motion'
import { filterData } from './data1'
import { filterData2 } from './data2'
import { filterData3 } from './data3'
import { filterData4 } from './navdata'
import { filterData5 } from './data4'
import Indcomp from './Indcomp'
import img7 from '../assets/fire2.png'
import img8 from '../assets/noback .png'
import TechHori from './TechHori'
import DanceHori from './DanceHori'
import DramaHori from './DramaHori'
import MusicHori from './MusicHori'
import EnglishHori from './EnglishHori'

const Competitions = () => {
  return (
    <div className='maincompet'>
        <motion.div 
         initial={{opacity:0,scale:0.5,y:-60}}
         animate={{opacity:1,scale:1,y:0}}
       transition={{duration:2}}
        className='compheading'>Competitions</motion.div>

        <div className='category'>

        <div className='catnav'>
        {filterData4.map((data)=>{
                return <div key={data.id}>{data.title}</div>
            })}
       <motion.img src={img7} 
       initial={{y:-70,x:-15,rotate:20}}
       animate={{y:10,x:10,rotate:0}}
       transition={{duration:3}}
       className='compimg1'/>

        </div>

        <div className='subcategory'>
                
        <div className='subheading'>#TECHNICAL</div>
            <section className='dance'>
                <TechHori/>
            </section>

            <div className='subheading'>#Dance</div>
            <section className='dance'>
                    <DanceHori/>
            </section>
            <div className='subheading'>#Drama</div>
            <section className='dance'>
                <DramaHori/>
            </section>
            <div className='subheading'>#Music</div>
            <section className='dance'>
                <MusicHori/>
            </section>
            <div className='subheading'>#Word's Worth</div>
            <section className='dance'>
                <EnglishHori/>
            </section>
        </div>

        </div>
    </div>
  )
}

export default Competitions