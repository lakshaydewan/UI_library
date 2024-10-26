'use client'
import React, { useEffect } from 'react'
import { easeOut, motion, useAnimationControls } from 'framer-motion'
import Nothing from '../components/Nothing';
import Cover from '../components/Cover';


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
            <div className='w-fit h-fit font-new text-3xl mt-[10px] mr-2 -z-20'>
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
                    <Nothing /> {/*do not open*/}
                </motion.div>
            </div>
            <div className='ml-1 mt-[6px] font-new text-4xl font-extralight'>
                %
            </div>
            <div className='w-screen h-screen absolute top-0 left-0 z-[1000] overflow-hidden'>
                <Cover />
            </div>
        </div>
    )
}

export default Counter

