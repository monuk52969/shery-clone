import React from 'react'

const TopCompany = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
        <div className="heading mt-28">
            <h1 className='text-5xl text-center font-neue-light font-400'>Top <span className='text-[#24CFA6]'>Componies</span> our students <br /> working with</h1>
        </div>
        <div className="img">
            <img src="https://ik.imagekit.io/sheryians/companies-logo/companies_CcvVE6pUo.png" alt="" className='w-[68vw] mt-20 mb-16'/>
        </div>
        <div className="btn mb-10">
            <button className="mt-auto  py-2 px-10 text-center rounded-lg text-2xl font-helvetica-medium font-900 bg-[#27DFB3] text-black hover:opacity-90 transition-all duration-200">
                Explore Courses
              </button>
             
        </div>
         <hr />
    </div>
  )
}

export default TopCompany