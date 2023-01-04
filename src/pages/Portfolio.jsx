import React from 'react'
import { Projects } from '../db/Projects'

function Portfolio() {
  return (
    <main className='bg-[#1B1925] w-screen h-full text-white'>
        {/* Title */}
        <section className='h-[30vh] pt-[7vh] flex flex-col justify-center items-center' id='about'>
            <h1 className='text-center text-3xl lg:text-5xl text-bn uppercase tracking-widest'>Portfolio</h1>
        </section>
        {/* Content */}
        <section className='max-w-[1240px] mx-auto p-5'>
            <section>
              <h1 className='text-bn text-3xl'>Featured Projects</h1>
              <p className='text-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem beatae enim nesciunt sapiente quia ullam 
                natus ipsa numquam maxime distinctio assumenda, molestiae 
                laudantium voluptate eius eos dicta omnis eaque nemo! Totam vero, 
                ipsam dolores nulla deserunt veniam, ea necessitatibus deleniti optio, 
                culpa accusamus minus natus. Id fugiat facere similique?
              </p>
            </section>
            <section className='my-5 grid lg:grid-cols-3 gap-5 place-items-center'>
              {Projects.map((item)=>{
                return(
                  <div key={item.id} className=' rounded lg:w-[20vw] bg-[#312d41]'>
                    <img src={item.coverImg} alt="house" className=' rounded-t '/>
                    <div className='flex flex-col justify-between items-center p-3'>
                      <h1 className='text-inter uppercase tracking-widest text-lg'>{item.title}</h1>
                    </div>
                  </div>
                )
              })}
            </section>
        </section>
    </main>
  )
}

export default Portfolio