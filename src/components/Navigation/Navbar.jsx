import React, { useState, useEffect } from 'react'
import {CgMenuGridO} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink,Link } from 'react-router-dom'

function Navbar() {
    let activeStyle = {
      textDecoration:'underline'
  };
  const [isOpened,setIsOpened] = useState(false)
  const [shadow,setShadow] = useState(false)

  useEffect(()=>{
      const handleShadow = ()=>{
          if(window.scrollY>=90){
              setShadow(true)
          }
          else{
              setShadow(false)
          }
      }
      window.addEventListener('scroll',handleShadow)
  },[])
  window.addEventListener('resize',()=>{
    if(window.innerWidth > 1024){
      setIsOpened(false)
    }
  })
  function toggleNav(){
    setIsOpened(!isOpened)
  }
  return (
    <nav className={shadow?'ease duration-300 shadow bg-[#1b1925] fixed h-[7vh] w-screen z-[10] text-white p-5 flex justify-between items-center':
    'ease duration-300 fixed h-[7vh] w-screen z-[10] text-white p-5 flex justify-between items-center'}>
      {/* Logo */}
      <section>
          <Link to={`/`}>
          <h1 className='font-light text-3xl lg:text-4xl text-bn'>ARX.</h1>
          </Link>
      </section>
      {/* Nav Links */}
      <ul className=
    {window.innerWidth<1024 && isOpened?'fixed bg-[#1b1925] top-0 left-0 w-[50%] h-screen flex flex-col justify-center items-center gap-5 ease duration-200'
       :'hidden lg:flex gap-5'}
       onClick={toggleNav}>
        <h1 className="text-center text-bn text-5xl lg:hidden">
          ARX.
        </h1>
          <li>
            <NavLink
            to={`/`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
              <p className='text-md uppercase tracking-widest text-m'>Home</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`about`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
              <p className='text-md uppercase tracking-widest text-m'>About</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`portfolio`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
              <p className='text-md uppercase tracking-widest text-m'>Portfolio</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`people`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
              <p className='text-md uppercase tracking-widest text-m'>People</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`jobs`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
              <p className='text-md uppercase tracking-widest text-m'>Jobs</p>
            </NavLink>
          </li>

          <li>
            <NavLink
            to={`contact`}
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={toggleNav}>
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