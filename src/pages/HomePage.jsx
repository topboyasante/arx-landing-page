import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main>
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop
            className="mySwiper"
        >
            <SwiperSlide className='w-screen h-screen relative' id='first'>
                <section className='absolute bottom-[5rem] left-0 p-5 text-white'>
                    <p className=" text-inter uppercase lg:text-2xl my-2">East Legon</p>
                    <h1 className='text-5xl lg:text-8xl text-bn uppercase tracking-widest my-2'>Urban Platinum Hotel</h1>
                    <Link>
                                    <div className='border border-white w-[100px] h-[45px] rounded px-4 py-2 hover:scale-105 ease duration-150 relative'>
                                        <div className='bg-black w-full h-full absolute top-0 left-0 rounded opacity-50'></div>
                                        <p className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 uppercase tracking-widest'>
                                            Explore
                                        </p>
                                    </div>
                    </Link>
                </section>
            </SwiperSlide>
            <SwiperSlide className='w-screen h-screen relative' id='second'>
                <section className='absolute bottom-[5rem] left-0 p-5 text-white'>
                    <p className=" text-inter uppercase lg:text-2xl my-2">Airport Residential</p>
                    <h1 className='text-5xl lg:text-8xl text-bn uppercase tracking-widest my-2'>Ghana National Museum</h1>
                   <Link>
                                    <div className='border border-white w-[100px] h-[45px] rounded px-4 py-2  hover:scale-105 ease duration-150 relative'>
                                        <div className='bg-black w-full h-full absolute top-0 left-0 rounded opacity-50'></div>
                                        <p className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 uppercase tracking-widest'>
                                            Explore
                                        </p>
                                    </div>
                    </Link>
                </section>
            </SwiperSlide>
            <SwiperSlide className='w-screen h-screen relative' id='third'>
                <section className='absolute bottom-[5rem] left-0 text-white p-5'>
                    <p className=" text-inter uppercase lg:text-2xl my-2">Tema Comm. 25</p>
                    <h1 className='text-5xl lg:text-8xl text-bn uppercase tracking-widest my-2'>ARX Luxury Apartments</h1>
                   <Link>
                                    <div className='border border-white w-[100px] h-[45px] rounded px-4 py-2 hover:scale-105 ease duration-150 relative'>
                                        <div className='bg-black w-full h-full absolute top-0 left-0 rounded opacity-50'></div>
                                        <p className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 uppercase tracking-widest'>
                                            Explore
                                        </p>
                                    </div>
                    </Link>
                </section>
            </SwiperSlide>
        </Swiper>
    </main>
  )
}

export default HomePage