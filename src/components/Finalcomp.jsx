import React from 'react'
import { SwipeCarousel } from './SwipeCarousel'
import { filterData } from './data1'
import { filterData2 } from './data2'
import { filterData3 } from './data3'
import { filterData5 } from './data4'
import './Finalcomp.css'

<style>
@import url('https://fonts.googleapis.com/css2?family=Briem+Hand:wght@100..900&family=Poetsen+One&display=swap');
</style>

const Finalcomp = () => {
  return (
    <div className='flex flex-col bg-neutral-950 text-white p-20'>
        <h2 className="text-6xl font-bold now">DRAMA</h2>
        <SwipeCarousel items={filterData}/>
        <h2 className="text-6xl font-bold now">MUSIC</h2>
        <SwipeCarousel items={filterData2}/>
        <h2 className="text-6xl font-bold now">DANCE</h2>
        <SwipeCarousel items={filterData3}/>
    </div>
  )
}

export default Finalcomp