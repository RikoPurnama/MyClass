import React from 'react'
import CardPhoto from './CardPhoto'
import fotbar1 from '../../assets/fotbar/1 (1).jpg'
import fotbar2 from '../../assets/fotbar/1 (2).jpg'
import fotbar3 from '../../assets/fotbar/1 (3).jpg'
import fotbar4 from '../../assets/fotbar/1 (4).jpg'
import fotbar5 from '../../assets/fotbar/1 (5).jpg'
import fotbar8 from '../../assets/fotbar/1 (8).jpg'
import fotbar9 from '../../assets/fotbar/1 (9).jpg'

const AllPhoto = () => {
  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="w-full flex justify-center px-6">
            <div className="flex flex-wrap">
              <CardPhoto photo={fotbar1}/>
              <CardPhoto photo={fotbar2}/>
              <CardPhoto photo={fotbar3}/>
              <CardPhoto photo={fotbar4}/>
              <CardPhoto photo={fotbar5}/>
              <CardPhoto photo={fotbar8}/>
              <CardPhoto photo={fotbar9}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AllPhoto