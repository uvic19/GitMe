import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home = () => {
  function openWin() {
    window.location.href="/main";
  }
  return (
    <div>
      <Navbar />

      {/* Header */}
      <div
        className="h-[500px] bg-url lg:h-[100vh] flex items-center justify-top flex-col"
        style={{ backgroundImage: "url('/header_img.svg')" }}
      >
        <motion.h2
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        
        className="pl-5 text-5xl sm:text-6xl lg:text-[82px] max-w-3xl mt-[100px] font-semibold pt-20">
          Your <span className="text-[#F03C2E]">README.</span> Simplified.
        </motion.h2>
        <motion.span
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        
        className=" p-5 text-[19px] sm:text-[15px] lg:text-[28px] inline-block max-w-3xl  pt-10">
          Create polished, professional README files for your GitHub projects in
          minutes.
        </motion.span>
        <button className="md:block mt-5 bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
        onClick={openWin}>
          Get Started
        </button>
      </div>

      {/* How It Works */}
      <div className="flex justify-center mt-10 flex-col items-center mb-5">
        <motion.h1
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

          className="lg:text-[30px] font-semibold text-[30px] underline underline-offset-[10px]"
          id="work"
        >
          How It Works!
        </motion.h1>
        <motion.p
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

        className="lg:text-[20px] mt-8 font-light text-[20px] text-center p-8">
          GitMe simplifies README creation using the robust Gemini Nano API to
          ensure a fast and efficient experience. Start by entering your project
          details, such as its purpose, features, and usage instructions. Then,
          select a style that fits your project, whether sleek and simple or
          detailed and feature-rich. Using the Gemini Nano API, your inputs are
          processed instantly to generate a polished README, ready for download.
          Enhance your GitHub projects with ease and professionalism!
        </motion.p>
      </div>

      {/* Feature Section */}
      <div className="flex justify-center mt-8 flex-col items-center mb-20">
        <motion.h1
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

          className="lg:text-[30px] font-semibold text-[30px] underline underline-offset-[10px]"
          id="feature"
        >
          Features
        </motion.h1>
        <div className="h-[420px] w-full mt-10 flex p-10 gap-8 lg:flex-nowrap flex-wrap lg:overflow-hidden overflow-scroll">
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            
            className="max-w-[340px] h-[340px] border shadow-lg rounded px-8 py-12 text-center">
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src="/fast.svg"
              />
              <h2 className="text-xl text-white font-medium">
                Fast and Easy Setup
              </h2>
              <p className="text-gray-500 pt-1">
                Get started effortlessly with a streamlined process that saves
                time and boosts productivity, helping you focus on what matters
                most—your code.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, y: -50}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            
            className="max-w-[340px] h-[340px] border shadow-lg rounded px-8 py-12 text-center">
              <img
                className="w-20 h-20 rounded-full mx-auto mb-4"
                src="/custom.svg"
              />
              <h2 className="text-xl text-white font-medium">
                Customizable Markdown
              </h2>
              <p className="text-gray-500 pt-1">
                Tailor your README to fit your project’s style. Choose from
                multiple templates and easily edit to align with your unique
                needs.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, y: 50}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            
            className="max-w-[340px] h-[340px] border shadow-lg rounded px-8 py-12 text-center">
              <img
                className="w-20 h-20 mx-auto mb-4"
                src="/api.svg"
              />
              <h2 className="text-xl text-white font-medium">
                API-Powered Performance
              </h2>
              <p className="text-gray-500 pt-1">
                GitMe is built on the Gemini Nano API, ensuring fast, reliable,
                and efficient handling of your input for flawless results.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 ">
            <motion.div 
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            
            className="max-w-[340px] h-[340px] border shadow-lg rounded px-8 py-12 text-center">
              <img
                className="w-20 h-20 mx-auto mb-4"
                src="/hand.svg"
              />
              <h2 className="text-xl text-white font-medium">
                Collaborator-Ready Outputs
              </h2>
              <p className="text-gray-500 pt-1">
                Create professional, polished READMEs that impress teammates,
                attract contributors, and deliver an exceptional user
                experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="flex mt-20 flex-col items-center mb-5 h-[650px]">
        <motion.h1
          initial={{opacity: 0, y: -20}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}

          className="lg:text-[30px] font-semibold text-[27px] underline underline-offset-[10px] pr-2 pl-2"
          id="faq"
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.div 
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        
        className="mt-10 border-t border-b pb-3 pt-3 w-[90%]">
          <h1 className="font-bold">1. What is GitMe?</h1>
          <p>
            GitMe is a tool designed to simplify README creation for your GitHub
            projects. It helps you generate professional, customizable, and
            clean markdown files quickly and efficiently.
          </p>
        </motion.div>

        <motion.div
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        
        className="mt-10 border-t border-b pb-3 pt-3 w-[90%]">
          <h1 className="font-bold">2. How does GitMe work?</h1>
          <p>
            GitMe uses the Gemini Nano API to process your inputs, allowing you
            to select a style, generate, and download a polished README in
            minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

        className="mt-10 border-t border-b pb-3 pt-3 w-[90%]">
          <h1 className="font-bold">3. Is GitMe free to use?</h1>
          <p>
            Yes, GitMe offers a free version with essential features. Advanced
            customization options may require a premium plan in the future.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

        className="mt-10 border-t border-b pb-3 pt-3 w-[90%]">
          <h1 className="font-bold">
            4. Can I edit the README after generating it?
          </h1>
          <p>
            Absolutely! The markdown files created by GitMe are fully editable,
            so you can tweak them to fit your specific needs.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}

        className="mt-10 border-t border-b pb-3 pt-3 w-[90%]">
          <h1 className="font-bold">
            5. Do I need coding skills to use GitMe?
          </h1>
          <p>
            Not at all! GitMe is designed for users of all levels. Its intuitive
            interface ensures anyone can create a README, regardless of
            technical expertise.
          </p>
        </motion.div>
      </div>

      {/* Pricing */}

      <div className="flex lg:mt-10 mt-[300px] flex-col items-center mb-5 h-[650px]">
        <motion.h1
          initial={{opacity: 0, y: -20}}
          transition={{duration: 1.5}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}

          className="lg:text-[30px] font-semibold text-[30px] underline underline-offset-[10px]"
          id="price"
        >
          Pricing
        </motion.h1>
        <div className="h-[420px] w-full mt-10 flex justify-center p-10 gap-8 lg:flex-nowrap flex-wrap">
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}

            className="max-w-[340px] h-[400px] border shadow-lg rounded px-8 py-12 text-center">
              <h2 className="text-2xl text-white font-medium pb-5">Starter</h2>
              <span className="text-3xl font-bold">$5</span>
              <p className="text-gray-500 pt-5">
              The Starter plan includes basic templates, fast README generation using the Gemini Nano API, and downloadable markdown files, perfect for small projects. It also offers email support.
              </p>
              <button className="mt-5 bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
              onClick={() => {alert("Will be added soon!")}}>
              Join Now
              </button>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, y: 100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            
            className="max-w-[340px] h-[400px] border shadow-lg rounded px-8 py-12 text-center">
              <h2 className="text-2xl text-white font-medium pb-5">Premium</h2>
              <span className="text-3xl font-bold">$15</span>
              <p className="text-gray-500 pt-5">
              The Premium plan offers advanced templates, faster API processing, customizable sections, and collaboration-ready outputs. It also provides priority support for quicker assistance.
              </p>
              <button className="mt-5 bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
              onClick={() => {alert("Will be added soon!")}}>
              Join Now
              </button>
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}

            className="max-w-[340px] h-[400px] border shadow-lg rounded px-8 py-12 text-center">
              <h2 className="text-2xl text-white font-medium pb-5">Enterprise</h2>
              <span className="text-3xl font-bold pb-8">$20</span>
              <p className="text-gray-500 pt-5">
              The Enterprise plan includes unlimited custom templates, teams collaboration, high-performance API access, custom branding, analytics, and 24/7 premium support via email and live chat.
              </p>
              <button className="mt-5 bg-[#F03C2E] px-8 py-2 rounded-full hover:bg-[#c82217] hover:text-white transition-all"
              onClick={() => {alert("Will be added soon!")}}>
              Join Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
      >
      <Footer/>
      </motion.div>
    </div>
  );
};

export default Home;
