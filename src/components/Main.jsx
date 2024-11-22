import React from 'react'
import Navbar from './Navbar'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full flex items-center justify-center'>
      <div className='lg:h-[530px] lg:h-max-[530px] lg:w-[800px]  mt-[120px] lg:mt-[30px] flex flex-col lg:items-center pl-2 pr-2'>
        <h1 className=' text-3xl lg:text-3xl lg:pt-5  font-bold'><span className='text-[#c82217]'>Git</span>Hub Read<span className='text-[#c82217]'>me</span> Generator</h1>
          
          <form action="">
            <div className='flex justify-between items-center mt-8'>
            <h1 className='mt-2 font-semibold text-xl'>Paste Code Here</h1>
            <button className="md:block bg-[#F03C2E] px-5 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all">
                        Generate
                    </button>
            </div>
            <textarea type="text" placeholder='Write your code here:' className='lg:h-[400px] lg:w-[750px] h-[550px] w-[370px] text-black mt-2 bg-gray-200 border-2 border-[white]' />
          </form>
      </div>
      </div>
    </div>
  )
}

export default Main
