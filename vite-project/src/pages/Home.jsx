import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen '>
        <div className="container flex items-center justify-center mt-20">
            <div className="heading">
                <h1 className='text-[5vw] text-center leading-none font-neue-light font-light '>We only  <span className='text-[#27DFB3]'>teach</span> <br />what we are really <br />really good at.</h1>
            </div>
            <div className="para absolute mt-[18vw] ml-[58vw]">
                <p className='text-sm text-[#E9E9E9] leading-none font-helvetica-light font-light'>Get ready to <span className='text-[#27DFB3]'> accelerate your <br />career</span> with customized courses <br />and leave ypur mark in the teach <br /> industry</p>
            </div>
            <div className="btn absolute top-[65%] text-2xl bg-[#27DFB3] rounded-lg text-zinc-800 px-8 py-2">
                <button className='text-lg font-helvetica-medium font-medium'>Check Courses-Make an Impact</button>
            </div>
            
        </div>
        <div className="marq flex items-center justify-center mt-48 gap-36 text-center">
            <div className="box1 ">
                <h1 className='text-2xl font-helvetica-bold font-700'>25k+</h1>
                <p className='text-xl font-neue-light font-400'>Student taught</p>
            </div>
            <div className="box2">
                <h1 className='text-2xl font-helvetica-bold font-700'>20+</h1>
                <p className='text-xl font-neue-light font-400'>Instructors</p>
            </div>
            <div className="box3">
                <h1 className='text-2xl font-helvetica-bold font-700'>536k+</h1>
                <p className='text-xl font-neue-light font-400'>Youtub Subs.</p>
            </div>
        </div>
    </div>
  )
}

export default Home