import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Intro from './Intro'
import HeadingEvents from './HeadingEvents'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Stickimg from './Stickimg'
import { Countdown } from './Countdown'
import Eventtheme from './Eventtheme'


const Home = () => {
  return (
    <div className='Home'>
      <div className='first'>
      <Navbar/>
      <Countdown/>
      <Intro/>
      <Stickimg/>
      </div>
      <Eventtheme/>
      <HeadingEvents/>
      <Aboutus/>
      <Footer/> 
    </div>
  )
}

export default Home