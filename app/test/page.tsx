'use client'
import React from 'react'
import { motion } from 'framer-motion'

const CoolButton = () => {
    return (
        <div className='h-screen bg-[#080618] w-screen flex justify-center items-center'>
            <div className='group overflow-hidden rounded-md bg-[#112645] relative w-24 h-10 flex justify-center items-center cursor-pointer'>
                <div className='text-[#1e95e6] font-sans text-sm font-light flex justify-center items-center gap-0'>
                    <div>
                        SEND
                    </div>
                    <div className='size-6 aspect-square bg-black ml-4 z-auto rounded-sm'>
                        <div className='text-white flex justify-center items-center h-full'>
                            <div className='relative overflow-hidden'>
                                <div className='group-hover:translate-x-[110%] transition-all duration-500 ease-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <div className='absolute top-0 left-0 translate-x-[-110%] group-hover:translate-x-[-0%] transition-all duration-500 ease-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className='z-50 bg-blue-300 w-24 h-10 opacity-30 -translate-x-[100%] group-hover:-translate-x-[0%] transition-all duration-300 ease-out text-blue-300 absolute top-0 left-0 font-sans font-light'>
                    SEND
                </motion.div>
            </div>
        </div>
    )
}

export default CoolButton