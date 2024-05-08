import React from 'react'
import './Events.css'
import IndEvent from './IndEvent'
import Special from './Special'


const Events = () => {
  return (
    <div className='main'>
        <h1 className='heading'>All Events</h1>
        <section className='allevents'>
        <IndEvent/>
        <IndEvent/>
        <IndEvent/>
        <IndEvent/>
        <IndEvent/>
        <IndEvent/>
        </section>
        <h1 className='heading'>Key Events</h1>

    <section className='specialevents'>
   <Special/> 
   <Special/> 
   <Special/> 

    </section>      

    </div>
  )
}

export default Events