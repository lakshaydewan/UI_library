"use client";
import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Card = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    });

    // Define different y transformations for each card
    const y = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["1%", "-200%", "-200%" , "-200%"]); // For the first card
    const y1 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["1%", "1%", "-200%", "-200%"]); // For the second card
    const y2 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["1%", "1%", "1%", "-200%"]); // For the third card

    return (
        <div className='h-[500vh] w-[100vw]' ref={scrollRef}>
            <div className='h-[100vh] w-[100vw] font-medium text-8xl sticky top-0 left-0 flex justify-center items-center'>
                <div className='text-center flex flex-col gap-5 z-0'>
                    <div>THIS IS FROM THE ,</div>
                    <div>AWWWWARDS SITE,</div>
                    <div>OF THE DAY..</div>
                </div>
                {[
                    { rotation: "-8deg", zIndex: 1, y:y },
                    { rotation: "0deg", zIndex: 2, y:y1  },
                    { rotation: "16deg", zIndex: 3, y:y2  }
                ].map((card) => (
                    <Card_solo
                        key={card.zIndex}
                        y={card.y}
                        rotation={card.rotation}
                        zIndex={card.zIndex} // Staggered delay for each card
                    />
                ))}
            </div>
        </div>
    );
};

const Card_solo = ({ y, rotation, zIndex }: any) => {
    return (
        <div className='w-full h-full absolute flex justify-center items-center'>
            <motion.div
                className={`w-72 h-96 border border-gray-500 text-lg font-light rounded-2xl bg-black bg-opacity-65 ${zIndex === 1 && "z-50" } ${zIndex === 2 && "z-30" } ${zIndex === 3 && "z-10" } backdrop-blur-md text-white flex items-center justify-center`}
                style={{
                    rotate: rotation,
                    y,
                }}
                transition={{
                    duration: 0.5,
                }}>
                hi there
            </motion.div>
        </div>
    );
};

export default Card;
