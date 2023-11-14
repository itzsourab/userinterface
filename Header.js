import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <div className='parentdiv'>
        <span className='logo'><img src="/txt.png" alt="logo" /></span>
        <div className="navbar">
          <a href="#course">Course</a>
          <a href="#aboutus">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#personalinfo">Personal Information</a>
          <a href="#jobs">Jobs</a>
        </div>
        <div className='signpage'> 
        <button id='login'>log in</button>
        <button id ='signin'>sign up</button></div>
      </div>
    </>
  )
}
export default Header