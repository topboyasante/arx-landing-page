import React from 'react'

function Jobs() {
  return (
    <main className='bg-[#1B1925] w-screen h-full text-white'>
        {/* Title */}
        <section className='h-[30vh] pt-[7vh] flex flex-col justify-center items-center' id='about'>
            <h1 className='text-center text-3xl lg:text-5xl text-bn uppercase tracking-widest'>Jobs</h1>
        </section>
        {/* Content */}
        <section className='max-w-[1240px] mx-auto p-5'>
            <img src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="architecture" className='lg:w-[40vw] mx-auto'/>
            <div>
                <p className="text-center text-bn text-3xl  my-2">Careers at ARX</p>
                <p className="text-center text-inter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptas, impedit nostrum repellendus quod non magni possimus nam enim sit officiis qui iure ab commodi natus ipsa ipsum minima dolores blanditiis dolor nemo. Quasi voluptates asperiores 
                laudantium et voluptatibus perferendis accusamus rem amet? Molestias corporis rem optio dolorem magni itaque.</p>
            </div>
              <br />
            <img src="https://images.unsplash.com/photo-1542621323-be453184db76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="architecture" className='lg:w-[40vw] mx-auto'/>
            <div>
                <p className="text-center text-bn text-3xl  my-2">Internship Opportunities</p>
                <p className="text-center text-inter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptas, impedit nostrum repellendus quod non magni possimus nam enim sit officiis qui iure ab commodi natus ipsa ipsum minima dolores blanditiis dolor nemo. Quasi voluptates asperiores 
                laudantium et voluptatibus perferendis accusamus rem amet? Molestias corporis rem optio dolorem magni itaque.</p>
            </div>
           </section>
    </main>
  )
}

export default Jobs