import React from 'react'
import AllPhoto from './AllPhoto'


const Gallery = () => {
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="flex px-6">
            <h4 className='text-3xl font-bold text-dark pt-1'>XI 4 Gallery</h4>
          </div>
          <div className="flex gap-4 px-6 py-6">
            <button className='py-1 px-4 rounded-xl text-light bg-primary'>
              Fotbar
            </button>
            <button className='py-1 px-4 rounded-xl text-text bg-light shadow-button'>
              Kegiatan
            </button>
            <button className='py-1 px-4 rounded-xl text-text bg-light shadow-button'>
              Random
            </button>
          </div>

          <AllPhoto />
        </div>
      </section>
    </>
  )
}

export default Gallery