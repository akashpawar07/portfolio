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
          className="md:text-[25px] text-2xl mt-5 dark:text-neutral-100 slide-in-left"
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
            Hello, I'm Akash - Passionate Computer Science and Engineering Student and Java Programmer/ Frontend Developer / Backend Developer <br />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-2 text-left">
              <p
                ref={paragraph1Ref}
                className="mb-3 dark:text-neutral-100 slide-in-left"
              >
                Welcome to my portfolio website! I'm a dedicated and enthusiastic computer science student with a strong desire to create innovative solutions. With a solid foundation in programming languages and a keen interest in Backend Development, Frontend Development, I'm excited to showcase my projects and skills.
              </p>
              <p
                ref={paragraph2Ref}
                className="mb-3 dark:text-neutral-100 fade-in-up"
              >
                As a computer science student, I've developed a solid understanding of programming fundamentals, data structures. I'm proficient in languages like Java, JavaScript, Node js, Express Js, programming languages with strong understanding of databases. ie. MySQl and MongoDB
              </p>
              <p
                ref={paragraph3Ref}
                className="mb-3 dark:text-neutral-100 slide-in-right"
              >
                Apart from coding, I enjoy playing kabaddi, cricket, going gym, watching movies and spending time with family and friends. These activities help me maintain a healthy work-life balance and foster creativity. Feel free to explore my portfolio.
              </p>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;