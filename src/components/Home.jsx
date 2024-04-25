import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Intro from './Intro'
import HeadingEvents from './HeadingEvents'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Stickimg from './Stickimg'
import { Countdown } from './Countdown'


const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <Countdown/>
      <Intro/>
      <Stickimg/>
      <HeadingEvents/>
      <Aboutus/>
      <Footer/> 
    </div>
  )
}

export default Home