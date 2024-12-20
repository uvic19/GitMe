import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a0d4a2f9-9d6a-4ecc-9624-54c3292c780b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Submitted Successfully!", {position: "bottom-right",theme: "dark",autoClose: 3000,})

      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message, {position: "bottom-right",theme: "dark",autoClose: 3000,})
      setResult("");
    }
  };
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32  w-full overflow-hidde bg-stone-950 md:mt-[450px] mt-[840px] lg:mt-0' id='Footer'>
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
              <form onSubmit={onSubmit} className='flex md:flex-col gap-3'>
                <input type="email" name='Email' placeholder={result ? result : "Subscribe to our newsletter"} className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:ouline-none w-full md:w-auto'/>
                <button type="submit" className='py-2 px-4 rounded bg-[#F03C2E] text-white'>Subscribe</button>
                </form>
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
