import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32  w-full overflow-hidde bg-stone-950 mt-[840px] lg:mt-0' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-10'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src="/gitmelog.svg" alt="" />
            <p className='text-gray-400 mt-4'>GitMe is a solo project aimed at simplifying README creation for GitHub. While I strive for quality, please note there may be occasional errors. Your feedback is appreciated!</p>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>GitMe</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#" className='hover:text-white'>Home</a>
                <a href="#feature" className='hover:text-white'>Features</a>
                <a href="#faq" className='hover:text-white'>FAQs</a>
                <a href="#price" className='hover:text-white'>Pricing</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The lastest news, articles, and resources sent to your inbox weekly</p>
            <div className='flex gap-2'>
                <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:ouline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-[#F03C2E] text-white' onClick={() => {alert("Will be added soon!")}}>Subscribe</button>
            </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2024 |  GitMe.  All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
