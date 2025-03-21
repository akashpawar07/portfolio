import React, { useEffect, useRef } from 'react';

const About = () => {
  const headingRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all refs
    if (headingRef.current) observer.observe(headingRef.current);
    if (mainHeadingRef.current) observer.observe(mainHeadingRef.current);
    if (paragraph1Ref.current) observer.observe(paragraph1Ref.current);
    if (paragraph2Ref.current) observer.observe(paragraph2Ref.current);
    if (paragraph3Ref.current) observer.observe(paragraph3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center flex-col">
      <style jsx>{`
        .slide-in-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s ease-out;
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(100px);
          transition: all 0.8s ease-out;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .animate-in {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
      `}</style>

      {/*  headings section */}
      <div className="p-4 md:mt-[80px] mt-[80px] flex flex-col gap-10 items-center text-center">
        <h3
          ref={headingRef}
          className="md:text-[25px] text-2xl dark:text-neutral-100 slide-in-left"
        >
          A BIT ABOUT ME
        </h3>
        <h1
          ref={mainHeadingRef}
          className="md:text-7xl text-6xl text-blue-500 fade-in-up"
        >
          Who Am I?
        </h1>
        <div className="md:w-[80%] pl-2">
          <p className="first-letter:text-4xl text-left first-letter:font-bold first-letter:text-blue-500 dark:text-neutral-100">
            Hello, I'm Akash — a Computer Science and Engineering student passionate about full-stack development. <br />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-2 text-left">
              <p
                ref={paragraph1Ref}
                className="mb-3 dark:text-neutral-100 slide-in-left"
              >
                Welcome to my portfolio! I combine strong programming fundamentals with practical development skills to create innovative digital solutions. My technical toolkit includes JavaScript, React, NextJS, NodeJS, ExpressJS, and databases like MongoDB and MySQL.
              </p>
              <p
                ref={paragraph2Ref}
                className="mb-3 dark:text-neutral-100 fade-in-up"
              >
                I'm equally comfortable working on frontend interfaces with HTML, CSS, and TailwindCSS as I am building robust backend systems.
                My development process is strengthened by industry-standard practices using Git and GitHub, and I pride myself on creating clean, efficient code with well-structured REST APIs.
              </p>
              <p
                ref={paragraph3Ref}
                className="mb-3 dark:text-neutral-100 slide-in-right"
              >
                Beyond coding, I maintain balance through kabaddi, cricket, fitness, movies, and quality time with family and friends.
                Explore my projects to see how I transform ideas into functional, user-friendly applications.
              </p>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;