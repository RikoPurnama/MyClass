import React from 'react'
import {Link} from "react-router-dom"
import home from "../../assets/icon/home.svg"
import gallery from "../../assets/icon/gallery.svg"
import jadwal from "../../assets/icon/jadwal.svg"

export const Navbar = () => {
  return (
    <>
      <nav className='fixed bottom-0 w-full z-50 '>
        <div className='container'>
          <div className="w-full flex justify-center py-4 bg-light to-transparent">
            <ul className='w-full max-w-[250px] flex justify-between items-center '>
              <li>
                <Link to="/" className=''>
                  <img src={home} alt="home pages" className='w-8'/>
                </Link>
              </li>
              <li>
                <Link to="/gallery"> 
                  <img src={gallery} alt="gallery pages" className='w-8' />
                </Link>
              </li>
              <li>
                <Link to="/jadwal">
                  <img src={jadwal} alt="jadwal pages" className='w-8' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
