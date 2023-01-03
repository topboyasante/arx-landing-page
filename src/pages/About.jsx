import React from 'react'

function About() {
  return (
    <main className='bg-[#1B1925] w-full h-full text-white'>
        {/* Title */}
        <section className='w-full h-[30vh] pt-[7vh] flex flex-col justify-center items-center' id='about'>
            <h1 className='text-center text-3xl lg:text-5xl text-bn uppercase tracking-widest'>About ARX</h1>
        </section>
        {/* Content */}
        <section className='max-w-[1240px] mx-auto'>
            {/* 1 */}
            <section className='flex flex-col lg:flex-row justify-around items-center py-5'>
                <div className='lg:w-[40%] p-5'>
                    <h1 className='text-bn text-3xl text-center lg:text-left'>Company Profile</h1>
                    <br />
                    <p className="text-inter">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Officia culpa unde suscipit aperiam odit. Ducimus asperiores quas 
                        aspernatur est ea architecto at fugit unde! Pariatur natus reprehenderit 
                        obcaecati recusandae neque aliquam at fugit ratione. Consequuntur commodi
                         deleniti nisi sapiente tempora, libero adipisci inventore repudiandae corrupti deserunt sit sed, sequi quos!
                    </p>
                </div>
                <div className='lg:w-[40%] p-5'>
                    <img 
                    src="https://images.unsplash.com/photo-1509130298739-651801c76e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    />
                </div>
            </section>

            <section className='flex flex-col lg:flex-row-reverse justify-around items-center py-5'>
                <div className='lg:w-[40%] p-5'>
                    <h1 className='text-bn text-3xl text-center lg:text-left'>General Strengths and Scope of Works</h1>
                    <br />
                    <p className="text-inter">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Officia culpa unde suscipit aperiam odit. Ducimus asperiores quas 
                        aspernatur est ea architecto at fugit unde! Pariatur natus reprehenderit 
                        obcaecati recusandae neque aliquam at fugit ratione. Consequuntur commodi
                         deleniti nisi sapiente tempora, libero adipisci inventore repudiandae corrupti deserunt sit sed, sequi quos!
                    </p>
                </div>
                <div className='lg:w-[40%] p-5'>
                    <img 
                    src="https://images.unsplash.com/photo-1505085702750-96d89f461398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    />
                </div>
            </section>
        </section>
    </main>
  )
}

export default About