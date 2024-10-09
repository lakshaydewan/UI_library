"use client"
import { useScroll, useTransform, motion, useInView, easeOut } from 'framer-motion';

import React, { useRef, useState } from 'react'

const Page = () => {
  const TargetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: TargetRef
  })

  const [inView, setInView] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: '100%', // Start off-screen from the bottom
    },
    visible: {
      opacity: 1,
      y: 0, // Move into view
      transition: {
        duration: 0.5, // Adjust animation duration as needed
        ease: 'easeInOut', // Choose an easing function for a smoother effect
      },
    },
  };

  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1, 7, 30, 70, 120, 180, 210, 250, 290, 300, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

  return (
    <div>
      <div className='overflow-clip relative h-[500vh] w-screen bg-black' ref={TargetRef}>
        <div className='overflow-clip h-[100vh] w-screen fixed top-0 left-0 flex justify-center items-center'>
          <motion.div
            className='overflow-clip'
            style={{
              opacity,
              scale,
            }}
          >
            <h1 className='pl-[15px] text-7xl font-new font-normal text-white'>
              INSPIRE
            </h1>
          </motion.div>
        </div>
        <motion.div
        onViewportEnter={() => {
          console.log("ran!!!")
          setInView(true)
        }}
        onViewportLeave={() => {
          setInView(false)
        }}
        className='absolute bottom-0 left-0 h-screen w-screen bg-white text-black flex justify-center items-center'>
          <motion.div
            viewport={{ once: false, amount: 1 }}
            className='relative overflow-hidden w-fit'>
            <motion.h1
              initial={{ opacity: 1, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 100 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              className='text-4xl font-sans font-thin'>
              You Can make this as your Hero Section or Products Section.
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 100 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.7 }}
              className='text-center text-xl font-sans font-normal'
            >
              THIS IS REALLY COMMON THOUGH!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div >
  )
}

export default Page;

