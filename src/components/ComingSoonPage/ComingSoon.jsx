import React from 'react'
import './ComingSoon.css'

const ComingSoonPageLayout = () => {
  return (
    <>
    
    <div className='main-outer-container-comingsoonpage flex items-center justify-center'> 

        

        <div className="component-container-comingsoonpage gap-16 flex flex-col z-20">
            <div className="upper-headings-comingsoonpage text-center w-full text-[#00A69C]">
                <h1 className='text-5xl saira-font-style font-extrabold'>CARINA</h1>
                <p className='text-xl'>A New Shopping Era</p>
            </div>

            <div className="middle-tittle-comingsoonpage text-center">
                <h1 className='text-4xl font-extrabold text-white'>Coming Soon</h1>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 background-text-comingsoonpage'>
            <h1 className='text-6xl font-extrabold max-md:text-5xl max-sm:text-4xl text-center'>Coming Soon</h1>
        </div>
            </div> 

            <div className="text-center text-white flex flex-col gap-2">
                <p>Notify me!! When App is launched</p>
                <form action="" className='bg-white text-black p-1 gap-1 flex  rounded-sm'>
                    <input type="email" placeholder="Enter your email" required className='outline-none p-2 min-w-72 max-sm:min-w-60'/>
                    <button type="submit" className='bg-[#00A69C] text-white px-4'>Notify Me</button>
                </form>
            </div>

        </div>

    </div>
    
    <footer className='bg-black text-center text-white py-2 fixed w-full bottom-0 max-sm:text-sm'>
        <p>Copyright © 2024 Carina  - All Rights Reserved.</p>
    </footer>
    
    </>
  )
}

export default ComingSoonPageLayout
