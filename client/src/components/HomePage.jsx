import React, { createElement, useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ImageSlider from './ImageSlider';
import MyResume from '../assets/updated_resume.pdf'
import { FaArrowAltCircleDown } from "react-icons/fa";


let model = 'https://img.freepik.com/free-photo/full-shot-man-suit-working-stairs_23-2148230807.jpg?ga=GA1.1.919035732.1724917926&semt=ais_hybrid';



function Home() {

  // Text typing...
  let [typeEffect] = useTypewriter({

    words: ['Web Developer','Backend Developer','Frontend developer', 'Java Programmer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 100
  })

  return (
    <>
      <section id='home' className="min-h-screen flex items-center justify-center a">
        <div className="text-center">
          <div className='w-screen md:h-screen flex md:flex-row flex-col-reverse gap-1 p-2 '>

            {/* lefside section of Home page */}
            <div className=' md:w-[47%] md:p-[30px] p-6 flex flex-col gap-4 mt-[33px] ml-[px] ' >

              <p className='font-[Arial] font-semibold md:text-[16px] text-left animate-bounce dark:text-neutral-100'>WELCOME !</p>

              <h1 className='font-bold font-serif md:text-[38px] text-[25px] md:h-[51px] text-left dark:text-neutral-100'>I'm a
                <span className='text-red-600 font-bold ml-1 animation-smooth'> {typeEffect}</span><span className='dark:text-neutral-100 text-slate-950'><Cursor cursorColor='white'  cursorBlinking=''/></span>
              </h1>

              <p className='font-semibold text-left text-[16px] mt-2 dark:text-neutral-100'>
                Welcome to my portfolio website! I'm a dedicated and enthusiastic computer science student with a strong desire to create innovative solutions. With a solid foundation in programming languages and a keen interest in, Backend Development, Frontend Development , I'm excited to showcase my projects and skills.
              </p>
              <div className='flex flex-col md:items-start gap-2 text-slate-50 mt-7'>
                <button
                  className='active:bg-blue-800 font-semibold bg-blue-600 gap-2 rounded-md md:w-[25%] w-[35%] flex items-center justify-center text-gray-30 px-3 py-1'>
                  <a href={MyResume} download='akash-resume' className='flex gap-2'>
                    <p className=''>Resume</p> <span className='mt-1 text-[20px]'><FaArrowAltCircleDown /></span></a>
                </button>

              </div>
            </div>

            {/* home page Image slider section */}
            <div className=' md:w-[50%] md:h-[99%] md:p-4 p-4 md:mt-[40px]'>
              {/* slider components */}
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
