import React from 'react'
import hero from '../../assets/hero.png'
import ig from '../../assets/icon/ig.svg'
import fb from '../../assets/icon/fb.svg'

const Home = () => {
  return (
    <>
      <section>
        <div style={{backgroundImage: `Url(${hero})`}} className={'bg-fixed bg-cover bg-center'} >
          <div className="h-[400px] flex justify-center"></div>
        </div>
      </section>

      <section className='relative bg-light before:content[""] before:w-full before:h-16 before:bg-light before:absolute before:-top-16 before:rounded-tr-[80px]'>
        <div className="container">
          <div className="px-6">
            <h3 className='text-text'>Hallo there✌</h3>
            <h2 className='text-4xl font-bold text-dark pt-1'>Welcome To class XI 4</h2>
            <a className='text-text hover:underline' href="https://www.smkn1bongas.sch.id/" target='_blank'>We From SMKN 1 Bongas</a>
            <div className="flex gap-4">
              <a className='bg-ligt p-3 mt-4 shadow-2xl rounded-xl hover:shadow-none hover:bg-primary transition duration-500 ease-in-out' href="#">
                <img src={ig} alt="instagram" />
              </a>
              <a className='bg-ligt p-3 mt-4 shadow-2xl rounded-xl hover:shadow-none hover:bg-primary transition duration-500 ease-in-out' href="#">
                <img src={fb} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-36">
        <div className="container">
          <div className="px-6">
            <h2 className='text-2xl font-bold text-dark pt-1'>About Class</h2>
            <article>
              <p>Kami adalah angkatan dari 2022 di sekolah SMKN 1 Bongas.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home