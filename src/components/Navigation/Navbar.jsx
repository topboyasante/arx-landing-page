import React, { useState } from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink,Link } from 'react-router-dom'

function Navbar() {
    let activeStyle = {
      textDecoration:'underline'
  };
  const [isOpened,setIsOpened] = useState(false)
  function toggleNav(){
    setIsOpened(!isOpened)
  }
  return (
    <nav className='fixed h-[7vh] w-screen z-[10] text-white p-5 flex justify-between items-center'>
      {/* Logo */}
      <section>
          <Link to={`/`}>
          <h1 className='font-light text-3xl lg:text-5xl text-bn'>ARX.</h1>
          </Link>
      </section>
      {/* Nav Links */}
      <ul className={window.innerWidth<1024 && isOpened?'fixed bg-black top-0 left-0 w-[60%] h-screen flex flex-col justify-center items-center'
       :'hidden lg:flex gap-5'}>
          <li>
            <NavLink
            to={`/`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>Home</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`about`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>About</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`portfolio`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>Portfolio</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`people`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>People</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`jobs`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>Jobs</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`contact`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
              <p className='text-md uppercase tracking-widest text-m'>Contact</p>
            </NavLink>
          </li>

        </ul>
      {isOpened?<AiOutlineClose size={30} className='lg:hidden' onClick={toggleNav}/>
      :<CgMenuGridO size={30} className='lg:hidden' onClick={toggleNav}/>}
    </nav>
  )
}

export default Navbar