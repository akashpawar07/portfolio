import React from 'react'
import Socialmedia from './Socialmedia'
// import AIassistance from '../components/AI-assistance'


function Footer() {

    return (
        <>
        <div className='flex justify-center items-center'>
        {/* <AIassistance/> */}
        </div>
            <div className='items-center flex justify-center flex-col w-screen h-[120px] mt-[30px] gap-1 text-gray-300 bg-gray-700 dark:bg-slate-950 dark:text-gray-500'>
                <Socialmedia />
                <div>
                    <p className='text-[12px] md:text-[14px]'> copyright&copy;2024 Owner | Developed by - akash pawar</p>
                </div>
            </div>
        </>
    )
}

export default Footer
