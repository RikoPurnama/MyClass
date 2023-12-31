import React, { useState } from 'react'


const CardPhoto = ({ photo }) => {
  const [show, setShow] = useState('h-14')

  let handleClick = () => {

    if (show ==='h-14') {
      setShow('h-52 rounded-xl shadow-card')
    } else {
      setShow('h-14')
    }
  }


  return (
    <>
        <div className={`overflow-hidden hover:scale-150 hover:rounded-xl hover:shadow-card transition duration-300 ease-in-out ${show}`} onClick={handleClick}>
          <img src={photo} className={`${show} cursor-pointer`}/>
        </div>
    </>
  )
}

export default CardPhoto