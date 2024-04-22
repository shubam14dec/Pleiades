import React from 'react'
import './Footer.css'
import img from '../assets/cloud.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>    
        <div className='socials'>
        <a className='size_social' href='https://www.facebook.com/kletechbvb/'>
        <FaFacebook />
        </a>
        <a className='size_social' href='https://www.instagram.com/KLETechbvb/'>
        <FaInstagram />
        </a>
        <a className='size_social' href='https://www.youtube.com/c/KLETechnologicalUniversity'>
        <FaYoutube /> 
        </a>
        <a className='size_social' href='https://twitter.com/KLETechbvb'>
        <FaTwitter />
        </a>
        <a className='size_social' href='https://www.linkedin.com/school/kletechbvb/'>
        <FaLinkedin />
        </a>
      
      </div>
        
    </div>
  )
}

export default Footer