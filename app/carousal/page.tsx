'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { easeIn, easeInOut, easeOut, motion, useAnimationControls } from "framer-motion"
import { mediaItems } from '@/data/data'


const Page = () => {

    const [img, setImage] = useState(mediaItems[0])
    const controlsforImage = useAnimationControls();
    const controlsforTitle = useAnimationControls();
    const controlsforText = useAnimationControls();
    const controlsForBg = useAnimationControls();
    const handleClick = () => {
        controlsForBg.set({opacity: 0})
        controlsForBg.start({opacity: 1})

        controlsforText.set({ opacity: 0, y: 10 })
        controlsforText.start({ opacity: 1, y: 0 })

        controlsforTitle.set({ y: 35 })
        controlsforTitle.start({ y: 0 })

        controlsforImage.set({ scale: 0 });
        controlsforImage.start({ scale: 1 });
    }


    useEffect(() => {
        handleClick()
    }, [img])

    return (
        <div className='h-screen w-screen bg-black m-0 p-0 relative'>
            <motion.div
            animate={controlsForBg}
            transition={{duration:0.2}}
            className='absolute w-screen h-screen overflow-hidden'>
                <Image
                    className='w-full h-full object-cover'
                    src={img.image}
                    width={1000}
                    height={1000}
                    alt='nothing'
                ></Image>
            </motion.div>
            <div className='absolute w-screen h-screen backdrop-blur-xl text-white flex'>
                <div className='w-full h-full relative flex'>
                    <div className='h-screen w-[35vw] flex justify-between overflow-hidden'>
                        <div className='flex flex-col justify-between items-start ml-3 my-3'>
                            <div className='flex justify-start gap-2 items-center font-semibold text-white'>
                                <div className='hover:text-gray-300 cursor-pointer duration-700 transition-all ease-out'>Home</div>
                                <div className='hover:text-gray-300 cursor-pointer duration-700 transition-all ease-out'>Work</div>
                                <div className='hover:text-gray-300 cursor-pointer duration-700 transition-all ease-out'>Contact</div>
                            </div>
                            <div className='font-bold text-4xl overflow-hidden'>
                                <motion.div
                                    initial={{y:35}}
                                    animate={{y: 0}}
                                    transition={{ duration: 0.6, delay: 0, ease: easeOut }}
                                >
                                    WE GO AGAIN
                                </motion.div>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.div
                                initial={{y:100}}
                                animate={{y: 0}}
                                transition={{duration: 0.6, delay:0.1, ease: easeOut}}
                                >
                                    A creative production studio founded by a former Olympian & an award-winning director. We know sport.
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 1000 }}
                            transition={{ ease: easeOut, duration: 3, delay: 0.5 }}
                            className='h-screen w-[1px] bg-gray-500'>
                        </motion.div>
                    </div>
                    <div className='w-[40vw] mx-3 flex flex-col items-center justify-between'>
                        <div className='w-full h-full my-4 flex flex-col gap-4'>
                            <div className='overflow-hidden'>
                                <motion.h1
                                    animate={controlsforTitle}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className='font-bold text-2xl'>
                                    {img.title}
                                </motion.h1>
                            </div>
                            <motion.div
                                animate={controlsforText}
                                transition={{ duration: 1, delay: 0.8 }}
                                className='mr-24 text-white'>
                                <p className='text-start font-bold'>
                                    {img.description}
                                </p>
                            </motion.div>
                            <div className=''>
                                <div className='overflow-hidden'>
                                    <motion.div
                                        animate={controlsforTitle}
                                        transition={{ duration: 0.6, delay: 0.9 }}
                                    >
                                        Credits
                                    </motion.div>
                                </div>
                                <div className='overflow-hidden'>
                                    <motion.div
                                        animate={controlsforTitle}
                                        transition={{ duration: 0.6, delay: 1 }}
                                    >
                                        Director: {img.producer}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            animate={controlsforImage}
                            transition={{ duration: 1, }}
                            className='w-full h-full my-4 overflow-hidden'>
                            <Image
                                className='w-full h-full object-cover'
                                src={img.image}
                                width={1500}
                                height={1500}
                                alt='nothing'
                            ></Image>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='z-30 w-[10vw] h-screen absolute right-0 flex overflow-hidden'>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 1200 }}
                    transition={{ ease: easeOut, duration: 3, delay: 0.5 }}
                    className='h-screen w-[1px] bg-gray-500 sticky top-0 left-0'>
                </motion.div>
                <div className='overflow-y-scroll relative w-full'>
                    {

                        mediaItems.map((item, idx) => (
                            <div key={idx} className='my-4 w-full h-30' onClick={() => {
                                setImage(mediaItems[idx])
                            }}>
                                <Image
                                    className='w-full h-30 object-cover'
                                    src={item.image}
                                    width={1500}
                                    height={1500}
                                    alt={item.title}
                                >
                                </Image>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Page

