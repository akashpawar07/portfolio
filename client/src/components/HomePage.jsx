import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image_Container from './ImageContainerHomePage';
import MyResume from '../assets/Akash_latest_Resume.pdf'
import { FaArrowAltCircleDown } from "react-icons/fa";
import Socialmedia from './Socialmedia'
import mainLogo from '../assets/logo/logo3.png'
import shreeKrishnaLogo from '../assets/logo/shreeKrishnaLogo.png'
import model from '../assets/logo/mainModel.png'


function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  // Sanskrit text for intro
  const [sanskritText] = useTypewriter({
    words: ['कृष्णाय वासुदेवाय हरये परमात्मने |\nप्रणतक्लेशनाशाय गोविन्दाय नमो नमः ||'],
    loop: 1,
    typeSpeed: 80,
    delaySpeed: 1000,
    onLoopDone: () => {
      setTimeout(() => {
        setIntroComplete(true);
        setTimeout(() => setShowIntro(false), 1000);
      }, 1500);
    }
  });

  // Main page typewriter effect
  let [typeEffect] = useTypewriter({
    words: ['Web Developer', 'Backend Developer', 'Frontend developer', 'MERN Developer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 100
  });

  return (
    <>
      {/* Sanskrit Intro Overlay */}
      {showIntro && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
            introComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div className="text-center px-4 max-w-4xl">
            {/* Shree Krishna Logo Only */}
            <div className="mb-8 flex justify-center items-center">
              <div className="relative group">
                <img 
                  src={shreeKrishnaLogo} 
                  alt="Shree Krishna" 
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-lg 
                           transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl
                           animate-pulse"
                />
              </div>
            </div>
            
            {/* Sanskrit text */}
            <div className="mb-8">
              <p className="text-yellow-300 text-xl italic md:text-4xl lg:text-3xl font-bold leading-relaxed whitespace-pre-line font-serif">
                {sanskritText}
                <span className="text-yellow-400">
                  <Cursor cursorColor="#fbbf24" />
                </span>
              </p>
            </div>

            {/* Subtitle */}
            <div className="text-white/80 text-sm md:text-base lg:text-lg font-medium">
              <p className="italic">Prayer to Lord Krishna for Protection and Guidance</p>
            </div>

            {/* Loading indicator */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Home Page Content */}
      <section id='home' className="min-h-screen flex flex-col items-center justify-center lg:mt-[-3rem] mt-[32px]">
        <div className='w-[97vw] md:h-screen flex md:flex-row justify-center flex-col-reverse gap-1 p-2'>

          {/* Left side section of Home page */}
          <div className='md:w-[45%] md:p-[30px] p-6 flex flex-col gap-4 mt-[45px] ml-[px]'>

            <p className='font-semibold md:text-[16px] text-left animate-pulse dark:text-neutral-100'>
              अध्ययनात् लभते ज्ञानं ज्ञानात् लभते गुणान् | <br />
              गुणेभ्यो लभते धर्मो धर्मात् लभते सुखम् ||
            </p>

            <h1 className='font-bold font-serif md:text-[35px] text-[22px] md:h-[51px] text-left dark:text-neutral-100'>I'm a
              <span className='text-red-600 font-bold ml-1 animation-smooth'> {typeEffect}</span>
              <span className='dark:text-neutral-100 text-slate-950'>
                <Cursor cursorColor='white' cursorBlinking='' />
              </span>
            </h1>

            <p className='font-semibold text-left text-[16px] mt-2 dark:text-neutral-100'>
              Welcome to my portfolio! I'm a computer science student fueled by passion for crafting innovative digital solutions. With solid foundations in programming and hands-on expertise in frontend and backend development, I've built projects showcased here that highlight my technical skills and problem-solving mindset. Always learning, always pushing boundaries – I'm excited to tackle new challenges in the ever-evolving tech landscape.
            </p>

            <div className='flex md:items-start text-slate-50 justify-center md:justify-start mt-7 gap-5'>
              <button className='active:bg-blue-800 font-semibold bg-blue-600 gap-2 rounded-md md:w-[25%] w-[35%] flex items-center justify-center text-gray-30 px-3 py-1'>
                <a href={MyResume} download='akash_latest_resume' className='flex gap-2'>
                  <p className=''>Resume</p> <span className='mt-1 text-[20px]'><FaArrowAltCircleDown /></span></a>
              </button>

              <Socialmedia />
            </div>
          </div>

          {/* Home page Image slider section */}
          <div className='md:w-[50%] md:h-[99%] md:p-4 md:mt-[40px]'>
            <Image_Container />
          </div>

        </div>
      </section>
    </>
  )
}

export default Home