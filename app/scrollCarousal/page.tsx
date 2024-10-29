'use client'
import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const Page = () => {

  const radius = 45; // Adjusted radius for a full 100% border
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  const circleVariants = {
    hidden: { strokeDasharray: `0 ${circumference}` },
    visible: { strokeDasharray: `${circumference} ${circumference}` },
  };


  return (
    <div className='h-screen w-screen relative font-sans flex justify-center items-center'>
      <div className='border w-96 h-96'>

      </div>
      <div className='w-fit h-fit absolute bottom-0 right-0 mr-10 mb-10'>
        <svg className='lg:size-48 size-32 relative' width="" height="" viewBox="0 0 100 100">
          <motion.circle
            cx="50"            
            cy="50"
            r={radius}  
            fill="none" 
            stroke="white"
            strokeWidth="0.5"
            variants={circleVariants}
            initial="hidden"             
            animate="visible"            
            transition={{ duration: 0.8, ease: 'easeInOut' }} 
          />
        </svg>
        <div className='overflow-hidden w-full text-lg font-semibold absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center'>
          <motion.div
          initial={{translateY: 22}}
          animate={{translateY: 0}}
          transition={{duration: 0.3, delay: 0.4, ease: 'easeOut'}}
          >VIEW PROJECT</motion.div>
        </div>
      </div>
    </div>
  )
}

export default Page