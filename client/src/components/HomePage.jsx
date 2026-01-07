import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image_Container from './ImageContainerHomePage';
import MyResume from '../assets/Akash_latest_Resume.pdf';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import Socialmedia from './Socialmedia';

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  // Intro text
  const [sanskritText] = useTypewriter({
    words: ['Learning today, leading tomorrow'],
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

  // Main typewriter
  const [typeEffect] = useTypewriter({
    words: ['Backend Developer', 'MERN Developer'],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 100
  });

  return (
    <>
      {/* INTRO OVERLAY */}
      {showIntro && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${introComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <div className="text-center px-4 max-w-4xl">
            <p className="text-yellow-300 text-xl md:text-4xl font-bold italic font-serif">
              {sanskritText}
              <Cursor cursorColor="#fbbf24" />
            </p>

            <div className="mt-8 flex justify-center gap-2">
              <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce" />
              <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-150" />
              <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
      )}

      {/* HOME SECTION */}
      <section
        id="home"
        className="
          pt-16
          min-h-[calc(100vh-4rem)]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-4
            flex
            flex-col-reverse
            md:flex-row
            items-center
            justify-center
            gap-6
          "
        >
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <p className="font-semibold animate-pulse dark:text-neutral-100">
              "Arise, awake, stop not till the goal is reached."
            </p>

            <h1 className="font-bold font-serif text-[22px] md:text-[35px] dark:text-neutral-100">
              I'm a
              <span className="text-red-600 font-bold ml-2">
                {typeEffect}
              </span>
              <Cursor cursorColor="white" />
            </h1>

            <p className="font-semibold text-[16px] dark:text-neutral-100">
              Welcome to my portfolio! I'm a computer science student fueled by passion for crafting innovative digital solutions. With solid foundations in programming and hands-on expertise in frontend and backend development, I've built projects showcased here that highlight my technical skills and problem-solving mindset. Always learning, always pushing boundaries – I'm excited to tackle new challenges in the ever-evolving tech landscape.
            </p>

            <div className="flex items-center gap-5 mt-6">
              <a
                href={MyResume}
                download="akash_latest_resume"
                className="
                  flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  px-4
                  py-2
                  rounded-md
                  transition
                "
              >
                Resume <FaArrowAltCircleDown />
              </a>

              <Socialmedia />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center items-center">
            <Image_Container />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
