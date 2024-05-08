import React from 'react'
import { filterData } from './data1'
import { motion } from 'framer-motion'

<style>
@import url('https://fonts.googleapis.com/css2?family=Briem+Hand:wght@100..900&family=Poetsen+One&display=swap');
</style>

const RegisterEvent = () => {
  return (
    <div className='flex flex-col bg-[#1a1a1a] text-white h-[100vh] gap-1'>
        <h1 className="text-[2.8rem] pl-10 pt-5 text-[#f6a75e] font-bold uppercase now">Register for the event</h1>
    <div className="flex justify-center items-center  flex-wrap gap-36 bg-[#1a1a1a]">
            <motion.img src={filterData[0].img} className="w-[400px] hover:scale-105 transition-all duration-500 p-7"
             initial={{scale:0.5,x:-150}}
             whileInView={{scale:1,x:0}}
             transition={{duration:0.1}}/>
            <motion.div className='flex flex-col items-end gap-14' 
                initial={{x:70,y:70}}
                whileInView={{x:0,y:0}} 
                transition={{duration:0.2}}>
            <div className='flex flex-col text-white max-w-[45vw] gap-7'>
                <div className="text-5xl now">{filterData[0].title}</div>
                <div className='text-xl'>{filterData[0].description}</div>
                <input type="text" name="KLEID" id="input1" className="w-64 h-10  rounded-lg text-black" placeholder='&emsp;&nbsp;Enter KLEID' />
            </div>
                <button className="rounded-2xl border-2 border-dashed border-black bg-white w-44 px-2 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                Register
                </button>   
            </motion.div>
    </div>
    </div>
  )
}

export default RegisterEvent