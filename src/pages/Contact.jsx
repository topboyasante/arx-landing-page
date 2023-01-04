import React from 'react'
import {FaLocationArrow} from 'react-icons/fa'
import {GiVibratingSmartphone} from 'react-icons/gi'
import {CgMail} from 'react-icons/cg'

function Contact() {
  return (
    <main className='bg-[#1B1925] w-screen h-full text-white'>
        {/* Title */}
        <section className='h-[30vh] pt-[7vh] flex flex-col justify-center items-center' id='about'>
            <h1 className='text-center text-3xl lg:text-5xl text-bn uppercase tracking-widest'>Contact</h1>
        </section>
        {/* Content */}
        <section className="max-w-[1240px] mx-auto p-5">
            <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="house"
            className='mx-auto w-[60%]'/>
            <p className='text-inter my-3 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, dolorum nostrum. Deserunt commodi dignissimos reiciendis quisquam voluptatibus dolore delectus, error laudantium ratione illo rerum hic aperiam! Quaerat eaque ad error.
            </p>
            <div className="flex flex-col md:flex-row items-start justify-center lg:justify-between gap-5 p-5">

              <div className='text-inter flex items-center justify-start gap-5 w-full'>
                  <FaLocationArrow color='white' size={40}/>
                  <div>
                    <h1 className='font-bold text-lg'>Address</h1>
                    <p className='text-sm'>P.O. Box 1985,</p>
                    <p className='text-sm'>Legon - Accra</p>
                    <p className='text-sm'>Ghana</p>
                  </div>
              </div>

              <div className='text-inter flex items-center justify-start gap-5 w-full'>
                  <GiVibratingSmartphone color='white' size={40}/>
                  <div>
                    <h1 className='font-bold text-lg'>Phone</h1>
                    <p className='text-sm'>+233 59 408 9959</p>
                  </div>
              </div>

              <div className='text-inter flex justify-start items-center gap-5 w-full'>
                  <CgMail color='white' size={40}/>
                  <div>
                    <h1 className='font-bold text-lg'>Mail</h1>
                    <p className='text-sm'>info@arxarchitecure.com</p>
                  </div>
              </div>

            </div>
        </section>
    </main>
  )
}

export default Contact