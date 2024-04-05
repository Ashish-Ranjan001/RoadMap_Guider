
import React from 'react'
import './navbar.css'
import {BsFillMapFill} from 'react-icons/bs'
import{TbGridDots} from 'react-icons/tb'
import{IoMdCloseCircle} from 'react-icons/io'

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href="window.location" className='logo flex'>
            <h1><BsFillMapFill className="icon"/> Roadmap Guider</h1>
          </a>
        </div>

        <div className="navBar">
          <ul className='navLists flex ' >
            <li className='nanItem'>
              <a href="window.location" className='navLink' style={{padding:20}}>Home</a>
            </li>

            <li className='nanItem'>
              <a href="window.location" className='navLink' style={{padding:20}}>Footer</a>
            </li>

            <li className='nanItem'>
              <a href="window.location" className='navLink' style={{padding:20}}>News</a>
            </li>

            <li className='nanItem'>
              <a href="window.location" className='navLink ' style={{padding:20}}>About</a>
            </li>

            <button className='btn'>
              <a href="/login">Sign Up</a>
            </button>
          </ul>
          
          <div className='closeNavbar'>
          <IoMdCloseCircle className="icon"/>
          </div>

        </div>

        <div className='toggleNavbar'>
        <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
