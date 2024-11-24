import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    function openWin() {
        window.location.href="/login";
      }


    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    },[showMobileMenu])

    return (
        <header className="relative w-full z-10">
            <ToastContainer/>
            {/* Navbar Container */}
            <div className=" top-0 left-0 w-full z-10 bg-stone-950">
                <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-8 bg-transparent">
                    <img src="./gitmelog.svg" alt="Logo" className="h-[40px]" to={"/"}/>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-10 text-white font-semibold">
                        <a href="/#work" className="cursor-pointer hover:text-[#F03C2E]">How It Works</a>
                        <a href="/#feature" className="cursor-pointer hover:text-[#F03C2E]">Features</a>
                        <a href="/#faq" className="cursor-pointer hover:text-[#F03C2E]">FAQs</a>
                        <a href="/#price" className="cursor-pointer hover:text-[#F03C2E]">Pricing</a>
                    </ul>   

                    {/* Sign Up Button */}
                    <button className="hidden md:block bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all" onClick={(e)=>{ toast.error("Will be added in future updates!", {position: "bottom-right",theme: "dark",autoClose: 3000,}) }}>
                        Sign up
                    </button>
                    
                    {/* Mobile Menu Icon */}
                    {!showMobileMenu && (
                        <img
                            src="./menu.svg"
                            className="md:hidden w-7 cursor-pointer"
                            alt="Menu"
                            onClick={() => setShowMobileMenu(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-inherit z-20 transition-transform duration-300 bg-neutral-900">
                    <div className="flex justify-end p-6">
                        <img
                            src="./cross.svg"
                            className="m-2 w-9 cursor-pointer"
                            alt="Close menu"
                            onClick={() => setShowMobileMenu(false)}
                        />
                    </div>
                    <ul className="flex flex-col items-center gap-4 mt-8 text-lg font-medium text-white">
                        <a href="/#work" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>How It Works</a>
                        <a href="/#feature" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Features</a>
                        <a href="/#faq" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>FAQs</a>
                        <a href="/#price" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Pricing</a>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
