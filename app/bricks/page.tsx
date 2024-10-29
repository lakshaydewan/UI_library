'use client'
import { motion, useAnimationControls, useScroll } from 'framer-motion'
import React, { useState, useRef } from 'react'
import MouseTrail from '../cursor/page';

const arr = [
  { id: 1, delay: 0.1 },
  { id: 2, delay: 0.15 },
  { id: 3, delay: 0.2 },
  { id: 4, delay: 0.25 },
  { id: 5, delay: 0.3 },
  { id: 6, delay: 0.35 },
  { id: 7, delay: 0.4 },
  { id: 8, delay: 0.45 },
  { id: 9, delay: 0.5 },
  { id: 10, delay: 0.55 },
  { id: 11, delay: 0.6 },
  { id: 12, delay: 0.65 },
  { id: 13, delay: 0.7 },
  { id: 14, delay: 0.75 },
  { id: 15, delay: 0.8 },
  { id: 16, delay: 0.85 },
  { id: 17, delay: 0.9 },
  { id: 18, delay: 0.95 },
  { id: 19, delay: 1.0 },
  { id: 20, delay: 1.05 },
  { id: 21, delay: 1.1 },
  { id: 22, delay: 1.15 },
  { id: 23, delay: 1.2 },
  { id: 24, delay: 1.25 },
  { id: 25, delay: 1.3 },
  { id: 26, delay: 1.35 },
  { id: 27, delay: 1.4 },
  { id: 28, delay: 1.45 },
  { id: 29, delay: 1.5 },
  { id: 30, delay: 1.55 },
  { id: 31, delay: 1.6 },
  { id: 32, delay: 1.65 },
  { id: 33, delay: 1.7 },
  { id: 34, delay: 1.75 },
  { id: 35, delay: 1.8 },
  { id: 36, delay: 1.85 }
];


const Page = () => {

  const controlsForFlipper = useAnimationControls();
  const controlsForBackDiv = useAnimationControls();
  const [isFlipped, setIsFlipped] = useState(false)
  const [size, setSize] = useState(false)


  const handleClick = () => {
    setIsFlipped((prev: any) => !prev);
    controlsForFlipper.start({ rotateX: isFlipped ? 0 : 180 });
    controlsForBackDiv.start({ zIndex: 10, opacity: [1, 0, 0.5, 0, 0.6, 0, 0.8, 0, 0.9, 0, 0, 0, 1, 0, 1, 1, 1] })
  };

  return (
    <div className='h-[100vh] w-screen overflow-hidden cursor-none'>
      <MouseTrail size={size} />
      <motion.div animate={controlsForBackDiv} transition={{ delay: 2, duration: 1 }} className='h-screen w-screen absolute top-0 left-0 flex justify-center items-center z-0'><h1 className='z-[0] text-[white] md:text-[130px] lg:text-[180px] text-7xl font-extrabold gloria-hallelujah-regular'>ONITSUKA</h1></motion.div>
      <div className={`w-screen h-screen sticky top-0 left-0 grid grid-cols-6 grid-rows-6 ${isFlipped ? "gap-0" : "gap-[5px]"} transition-all duration-1000 ease-out`}>
        {
          arr.map((item) => (
            <motion.div
              onMouseOver={() => {
                setSize(true)
              }}
              onMouseLeave={() => {
                setSize(false)
              }}
              className='row-span-1 col-span-1 card-container relative overflow-hidden' key={item.id}>
              <motion.div
                animate={controlsForFlipper}
                transition={{ duration: 1, delay: item.delay }}
                className='card w-full h-full rounded-md'>
                <div onClick={() => {
                  handleClick();
                }} className='card-front w-full h-full rounded-md text-md gloria-hallelujah-regular flex justify-center items-center'>
                  <div className='mix-blend-difference z-[1000] text-[#1b1c1f]'>GET STARTED</div>
                </div>
                <div className='card-back w-full h-full'>
                </div>
              </motion.div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Page;