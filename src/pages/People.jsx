import React from 'react'

function People() {
  return (
    <main className='bg-[#1B1925] w-screen h-full text-white'>
        {/* Title */}
        <section className='h-[30vh] pt-[7vh] flex flex-col justify-center items-center' id='about'>
            <h1 className='text-center text-3xl lg:text-5xl text-bn uppercase tracking-widest'>arx : the team</h1>
        </section>
        {/* Content */}
        <section className='max-w-[1240px] mx-auto p-5'>
            <div className='flex lg:flex-row flex-col items-center justify-around my-5'>
              <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
              alt="user" className='rounded-lg lg:w-[30%]'/>
              <div className='lg:w-[40%] py-2'>
                <h1 className="text-bn text-3xl text-gray-400"><span className='text-white'>Serebour,</span> Ryan</h1>
                <p className='text-inter'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam cum, 
                  fugit nobis, blanditiis quidem adipisci expedita in corrupti doloremque earum eveniet neque voluptatem nostrum. 
                  Dolorem nesciunt laborum eos eligendi!</p>
              </div>
            </div>
            <div className='flex lg:flex-row-reverse flex-col items-center justify-around my-5'>
              <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
              alt="user" className='rounded-lg lg:w-[30%]'/>
              <div className='lg:w-[40%] py-2'>
                <h1 className="text-bn text-3xl text-gray-400"><span className='text-white'>Aboagye,</span> Esther</h1>
                <p className='text-inter'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam cum, 
                  fugit nobis, blanditiis quidem adipisci expedita in corrupti doloremque earum eveniet neque voluptatem nostrum. 
                  Dolorem nesciunt laborum eos eligendi!</p>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-around my-5'>
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="user" className='rounded-lg lg:w-[30%]'/>
              <div className='lg:w-[40%] py-2'>
                <h1 className="text-bn text-3xl text-gray-400"><span className='text-white'>Olatunde,</span> Ayodeji</h1>
                <p className='text-inter'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laboriosam cum, 
                  fugit nobis, blanditiis quidem adipisci expedita in corrupti doloremque earum eveniet neque voluptatem nostrum. 
                  Dolorem nesciunt laborum eos eligendi!</p>
              </div>
            </div>
        </section>
    </main>
  )
}

export default People