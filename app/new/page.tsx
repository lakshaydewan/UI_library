'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const NewPage = () => {

  const height = window.innerHeight;
  //[url(/assets/imageHD.jpg)]

  return (
    <div className='w-screen h-screen overflow-hidden'>
      
      <motion.div
      initial={{zIndex: 0, opacity: 0}}
      animate={{zIndex: 30, opacity: 1}}
      transition={{duration: 1, delay: 3.3}}
      className='w-screen h-screen flex justify-center items-center absolute top-0 left-0'>
          <div className='w-full h-full relative flex justify-center items-center'>
            <div className='text-white font-sans font-semibold w-full absolute top-0 left-0 h-14 flex justify-center items-center gap-3'>
                <div className='cursor-pointer hover:text-gray-200'>Work</div>
                <div className='cursor-pointer hover:text-gray-200'>About</div>
            </div>
            <div className='font-sans font-normal text-xl md:text-3xl lg:text-5xl text-white tracking-wide'>
              <div className='w-full h-14 overflow-hidden'>
                <motion.div
                animate={{translateY: [50, 0]}}
                transition={{duration: 0.7, ease: "easeOut", delay: 3.8}}
                className=''>
                  The Regeneration Suite
                </motion.div>
              </div>
            </div>
          </div>
      </motion.div>
        <motion.div
        animate={{scale: [1, 5.9]}}
        transition={{duration: 1.4, delay: 2.9}}
        className='w-full h-full grid grid-cols-5 gap-2 z-10'>
            <div className='w-full h-full relative flex flex-col gap-2'>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1, ease: "linear"}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img.png"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.4, ease: "easeOut"}}
                className='w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img10.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.6}}
                className='w-full h-full overflow-hidden'>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.8}}
                className='bg-white w-full h-full overflow-hidden'>
                  <img src="/assets/img4.jpg" alt="nothing" className='w-full h-full object-cover object-center'/>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 2}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img2.jpg"}
                    alt="nothing"
                  ></Image>
                </motion.div>
            </div>
            <div className='w-full h-full overflow-hidden relative flex flex-col gap-2'>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1.3, delay: 1.9}}
                className='bg-red-300 w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img16.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.8}}
                className='bg-red-300 w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img17.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.6}}
                className='bg-red-300 w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img18.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.4}}
                className='bg-red-300 w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img19.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1}}
                className='bg-red-300 w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img20.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
            </div>
            <div className='w-full h-full overflow-hidden relative flex flex-col gap-2'>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1.3, delay: 1}}
                className='bg-red-300 w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img25.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.4}}
                className='bg-red-300 w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img24.avif"}
                    alt="nothing"
                  ></Image> 
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.6}}
                className='w-full h-full overflow-visible'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={10000}
                    priority
                    width={10000}
                    src={"/assets/imageHD.jpg"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.8}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img22.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 2}}
                className='bg-red-300 w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img26.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
            </div>
            <div className='w-full h-full overflow-hidden relative flex flex-col gap-2'>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1.3, delay: 2}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img31.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.8}}
                className='w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img23.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.6}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img27.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.4}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img28.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: -height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1}}
                className='bg-red-300 w-full h-full'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img29.avif"}
                    alt="nothing"
                  ></Image> 
                </motion.div>
            </div>
            <div className='w-full h-full overflow-hidden relative flex flex-col gap-2'>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1.3, delay: 1}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img30.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.4}}
                className='bg-red-300 w-full h-full overflow-hidden'> 
                <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img32.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.6}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img33.avif"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 1.8}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img2.jpg"}
                    alt="nothing"
                  ></Image>
                </motion.div>
                <motion.div
                initial={{translateY: height}}
                animate={{translateY: 0}}
                transition={{duration: 1, delay: 2}}
                className='w-full h-full overflow-hidden'>
                  <Image
                  className='w-full h-full object-cover object-center'
                    height={1000}
                    width={1000}
                    src={"/assets/img34.avif"}
                    alt="nothing"
                  ></Image> 
                </motion.div>
            </div>
        </motion.div>
    </div>  
  )
}

export default NewPage