'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const page = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref
    })
    const centeredStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.7, 0.7, 0.7, 0.7, 0.7])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0, 0, 0, 0, 0])

    const scale2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 0.7, 0.7, 0.7, 0.7])
    const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 1, 0, 0, 0, 0])

    const scale3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.7, 0.7, 0.7, 0.7, 0.7])
    const opacity3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0, 0, 0, 0, 0])

    return (
        <div className='w-screen h-[700vh] bg-white' ref={ref}>
            <div className='sticky top-0 left-0 w-screen h-screen border border-white'>
                <div className='h-full w-full flex justify-center items-center'>
                    <div className='size-96 aspect-square relative'>
                        <motion.div
                            style={{ scale, opacity }}
                            className='size-96 aspect-square'>
                            <Image
                                src={"/assets/img5.jpg"}
                                alt=''
                                width={10000}
                                height={10000}
                                className='w-full h-full'
                            />
                        </motion.div>
                        <motion.div
                            style={{ scale: scale2, opacity: opacity2 }}
                            className='size-96 aspect-square absolute top-0 left-0'>
                            <Image
                                src={"/assets/img3.jpg"}
                                alt=''
                                width={10000}
                                height={10000}
                                className='w-full h-full'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page