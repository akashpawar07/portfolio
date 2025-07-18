import React from 'react'
import { Link } from 'react-router-dom'
import plant from '../assets/plant.jpg'
import me from '../assets/me img.jpg'
import CSS from "../assets/css2.jpg"
import ExpressJs from "../assets/express.png"
import Html from "../assets/html.jpg"
import Java from "../assets/java.webp"
import Js from "../assets/js2.jpg"
import Nodejs from "../assets/nodejs2.jpg"
import MongoDB from "../assets/mongodb.jpeg"
import Sql from "../assets/sql.jpg"
import Oops from "../assets/oops.webp"
import github from '../assets/github.webp'
import comuni from '../assets/camun.webp'
import reactjs from '../assets/reactjs.jpg'


export default function SkillsPage() {
    return (
        <>
            <section id="skills" className="min-h-screen flex items-center justify-center flex-col">

                <h1 className=' font-bold text-center text-3xl md:text-5xl my-4'>Skills</h1>

                <div className=' flex flex-col md:flex-row w-screen h-auto p-3 gap-4 md:justify-center'>

                    {/* photo section*/}
                    <div
                        className='bg-[#0d0b0d] p-1 w-[99%] md:w-[40%] md:h-[80vh] h-[70vh] flex flex-col text-center items-center overflow-hidden rounded-br-3xl rounded-tl-3xl'
                        style={{
                            backgroundImage: `url(${plant})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <img src={me} alt="Me" className='h-[250px] w-[250px] mt-2 rounded-full object-contain' />
                        <div className='mt-4 text-white h-[100px] md:w-[70%] w-[90%] '>
                            <p className='md:text-[29px] text-[32px] text-gray-300 dark:text-neutral-100'>
                                I am happy to know you that 4+ Projects deployed sucessfully!
                            </p>
                        </div>
                    </div>

                    {/*langueges cards section */}
                    <div className='md:h-[80vh] md:w-[50%] h-[65vh] gap-3 flex md:flex-row flex-col items-center justify-evenly md:flex-wrap overflow-y-auto no-scrollbar scroll-smooth rounded-md '>


                        {/* ReactJs */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={reactjs} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[13px]'>
                                    React.js is a powerful JavaScript library that simplifies web development through its component-based architecture, allowing developers to create reusable UI elements that reduce code redundancy. Its Virtual DOM feature ensures fast performance by efficiently updating only necessary parts of a webpage, rather than reloading everything. The framework comes with extensive community support and a rich ecosystem of tools and libraries, making development faster and easier. What makes React particularly appealing is its simple learning curve combined with powerful features like JSX syntax and state management, making it an excellent choice for both beginners and experienced developers.
                                </p>
                            </div>

                        </div>

                        {/* Java */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Java} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
                            </div>
                            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>Java's compiled code (bytecode) runs on any device supporting Java Virtual Machine (JVM), making it:
                                    - Write Once, Run Anywhere (WORA)
                                    - Independent of underlying hardware and OS
                                    - Highly portable and reusable
                                </p>
                            </div>
                        </div>

                        {/* javaScript */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Js} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
                            </div>
                            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'> "Versatility"
                                    JavaScript seamlessly adapts to:
                                    - Client-side scripting
                                    - Server-side programming (Node.js)
                                    - Mobile and desktop app development
                                    - Game development
                                    - IoT programming

                                </p>
                            </div>
                        </div>

                        {/* OOPS */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Oops} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
                                {/* <h1 className='font-bold font-[Gill sans] text-3xl md:text-[20px]'>OOPS</h1> */}
                                <p className='text-[15px] md:text-[14px]'> OOPS used for design and develop scalable, and efficient software solutions. By embracing encapsulation, inheritance, and polymorphism, and maintainable code that simplifies complexity and drives innovation."
                                </p>

                            </div>
                        </div>

                        {/* Node js */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Nodejs} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth '>
                                <p className='text-[15px] md:text-[14px]'>I prefer Node Js beacause it proivdes us a powerfull runtime environment that allows to run JavaScript to create more efficient Websites wtth faster backend</p>

                            </div>
                        </div>

                        {/* Express js */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={ExpressJs} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] px-3 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>
                                    Express.js is a fast and flexible Node.js framework for building web applications and APIs. It simplifies server-side development with a minimalist approach. Scalable, secure, and easy to maintain.
                                </p>
                            </div>
                        </div>

                        {/* SQL */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Sql} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] p-2 flex flex-col items-center justify-evenly w-[99%] overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>
                                    "SQL is a standard language for storing, manipulating, and retrieving data in relational databases." <br />"SQL (Structured Query Language) is a standard programming language used for managing, manipulating, and retrieving data stored in relational database management systems (RDBMS). It enables users to perform various operations, including creating, modifying, and querying databases, as well as controlling access and ensuring data integrity."
                                </p>
                            </div>
                        </div>


                        {/* HTML */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf] '>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={Html} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] p-3 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>
                                    "HTML is a markup language for structuring and formatting web page content." <br />HTML is mainly used to develop and create web pages and applications. Combined with CSS and JavaScript, it has become a landmark in web development. Having CSS helps in layout, colors and appearance while JavaScript helps in embedding programs and affecting behavior of the web page contents.
                                </p>
                            </div>
                        </div>

                        {/* CSS */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={CSS} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 md:transition-all duration-500 cursor-pointer' />
                            </div>
                            <div className='h-[190px] px-4 py-2 flex flex-col text-left justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px] overflow-y-auto  no-scrollbar scroll-smooth'>
                                    CSS stand for Cascading Style Sheets Is used to style html document and it make a application more user interactive and user friendly <br />
                                    1. Consistency <br />
                                    2. Flexibility <br />
                                    3. Customizability <br />
                                    4. Responsive Design <br />
                                    5. Improved User Experience:- CSS enhances visual appeal, readability, and overall user experience.
                                </p>
                            </div>
                        </div>

                        {/* MongoDBL */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={MongoDB} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 md:transition-all duration-500 cursor-pointer' />
                            </div>
                            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>

                                    I use Mongodb, because<br />MongoDB is a document-oriented database that offers a flexible schema, scalable architecture, high performance, and rich query capabilities, making it ideal for big data, content management, and real-time analytics use cases, with features like data replication, and robust security, all managed through a intuitive GUI like MongoDB Compass, providing a powerful solution for modern application development."

                                </p>
                            </div>
                        </div>

                        {/* Github */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={github} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer' />
                            </div>
                            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[14px]'>
                                    I use GitHub for many reasons, including: <br />
                                    Version control: GitHub makes it easy to track changes and navigate revisions to code.
                                    Open source: GitHub is used by almost every open-source project to manage its code.
                                    Learning: GitHub is a robust platform for learning and expanding your programming knowledge.

                                </p>
                            </div>
                        </div>

                        {/*communication  */}
                        <div className='md:w-[45%] md:h-[65%] w-[90vw] flex flex-col rounded-lg text-center items-center border-indigo-400 border-x-2 border-y-2 bg-[#d5d5d7cf] dark:bg-[#515153cf]'>
                            <div className='w-full md:h-[55%] bg-purple-950 overflow-hidden rounded-tl-lg rounded-tr-lg'>
                                <img src={comuni} alt="" className='w-full md:h-[98%] h-[220px] rounded-tl-lg rounded-tr-lg object-cover md:hover:scale-125 transition-all duration-500 cursor-pointer ' />
                            </div>
                            <div className='h-[190px] px-2 py-2 flex flex-col items-center justify-evenly overflow-y-auto  no-scrollbar scroll-smooth'>
                                <p className='text-[15px] md:text-[13px]'>
                                    Effective communication is the process of exchanging ideas, thoughts, opinions, knowledge, and data so that the message is received and understood with clarity and purpose. When we communicate effectively, both the sender and receiver feel satisfied..
                                </p>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
        </>
    )
}
