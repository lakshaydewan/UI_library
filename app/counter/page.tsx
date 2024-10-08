'use client'
import React, { useEffect } from 'react'
import { easeOut, motion, useAnimationControls } from 'framer-motion'
import Nothing from '../components/Nothing';

const Counter = () => {
    const controlsfor1 = useAnimationControls();
    const controlsfor2 = useAnimationControls();
    const controlsfor3 = useAnimationControls();

    const handleAnimation = () => {
        controlsfor2.set({ y: 0 })
        controlsfor2.start({ y: -48 })

        controlsfor1.set({ y: 0 })
        controlsfor1.start({ y: -480 })

        controlsfor3.set({ y: 0 })
        controlsfor3.start({ y: -3120 })
    }

    useEffect(() => {
        handleAnimation()
    }, [])

    return (
        <div className='w-screen h-screen flex justify-center items-center p-0 m-0 box-border'>
            <div className='w-fit h-fit font-new text-3xl mt-[10px] mr-2'>
                LOADING
            </div>
            <div className='relative font-light font-new w-[30px] h-12 text-5xl overflow-hidden'>
                <motion.div animate={controlsfor2} transition={{ duration: 1.5, ease: easeOut, delay: 1.5 }} className='absolute top-0 left-0 w-10'>
                    <div>
                        0
                    </div>
                    <div>
                        1
                    </div>
                </motion.div>
            </div>
            <div className='relative font-light font-new w-[32px] h-12 text-5xl overflow-hidden'>
                <motion.div
                    animate={controlsfor1}
                    transition={{ duration: 3, ease: easeOut, delay: 0.6 }}
                    className='absolute top-0 left-0 w-10'>
                    <div>
                        0
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                    <div>
                        4
                    </div>
                    <div>
                        5
                    </div>
                    <div>
                        6
                    </div>
                    <div>
                        7
                    </div>
                    <div>
                        8
                    </div>
                    <div>
                        9
                    </div>
                    <div>
                        0
                    </div>
                </motion.div>
            </div>
            <div className='relative font-light font-new w-[32px] h-12 text-5xl overflow-hidden'>
                <motion.div
                    animate={controlsfor3}
                    transition={{ duration: 3, ease: easeOut }}
                    className='absolute top-0 left-0 w-10'>
                    <Nothing />
                </motion.div>
            </div>
            <div className='ml-1 mt-[6px] font-new text-4xl font-extralight'>
                %
            </div>
            <div className='w-screen h-screen absolute top-0 left-0 z-[10] overflow-hidden'>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }} // Animate to full viewport width
                    transition={{ duration: 1, delay: 3.8 }}
                    className='h-screen w-screen z-[10] overflow-hidden bg-[url(https://images.unsplash.com/photo-1623251738730-c43469a8aefc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover object-center bg-center bg-cover font-new'>
                    <section className='flex flex-col justify-around h-full gap-44 items-center'>
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.9, duration: 1.5 }}
                            className='flex justify-around py-5 md:text-2xl text-xl w-full'>
                            <div>
                                [LOGO]
                            </div>
                            <div className='md:block hidden'>
                                [PHOTOGRAPHER, PHOTODIRECTOR & FILMMAKER]
                            </div>
                            <div>
                                [MENU]
                            </div>
                        </motion.nav>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.9, duration: 1.5 }}
                            className='md:text-[160px] sm:text-9xl text-7xl'>
                            HOWARD
                        </motion.h1>
                        <motion.footer
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.9, duration: 1.5 }}
                            className='flex justify-center items-center py-5 md:text-2xl text-xl'>
                            <p>
                                MAKE AN IMPACT
                            </p>
                        </motion.footer>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default Counter