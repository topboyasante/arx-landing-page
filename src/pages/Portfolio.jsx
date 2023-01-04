import React from 'react'

function Portfolio() {
  return (
    <main className='bg-[#1B1925] w-screen h-screen text-white'>
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
        </section>
    </main>
  )
}

export default Portfolio