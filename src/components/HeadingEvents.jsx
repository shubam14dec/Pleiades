import React from 'react'
import './HeadingEvents.css'
import IndEvent from './IndEvent'
import Special from './Special'

const HeadingEvents = () => {
  return (
    <div className='headingevents'>
        <div className='heading2'>HEADLINIG EVENTS</div>
        <section className='headevent z-10'>
           <IndEvent/>
           <IndEvent/>
            <IndEvent/>
            <IndEvent/>
            <IndEvent/>
        </section>
        <div className='heading2'>KEY EVENTS</div>
        <section className='event2'>
            <Special/>
            <Special/>
            <Special/>
        </section>
        <div className='heading2'>COMPETITIONS</div>
        <section className='event2'>
            <Special/>
            <Special/>
            <Special/>
        </section>

    </div>
  )
}

export default HeadingEvents