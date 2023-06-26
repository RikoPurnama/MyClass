import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const activeLink = ({isActive}) => {
    return {
      padding: isActive ? '0.25rem' : '0',
      color: isActive ? '#FAFCFE' : '#24243F',
      background: isActive ? '#51B1A6' : 'transparent',
      borderRadius: isActive ? '0.75rem' : '0',

    }
  }

  return (
    <>
      <nav className='fixed bottom-0 w-full z-50 bg-transparent backdrop-blur-sm'>
        <div className='container'>
          <div className="w-full flex justify-center py-4 ">
            <ul className='w-full max-w-[250px] flex justify-between items-center '>
              <li>
                <NavLink to="/" style={activeLink} className='flex justify-center p-1'>
                  <i className="fa-solid fa-house w-8 p-2"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" style={activeLink} className='flex justify-center p-1'> 
                  <i className="fa-solid fa-image w-8 p-2"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/jadwal" style={activeLink} className='flex justify-center p-1'>
                  <i className="fa-solid fa-calendar w-8 p-2"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
