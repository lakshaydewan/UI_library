"use client";
import { useScroll, motion, useTransform } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import React, { useRef } from 'react';
import { MotionValue } from 'framer-motion';

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
                    { rotation: "-8deg", zIndex: 1, y:y, content: "Perception" },
                    { rotation: "0deg", zIndex: 2, y:y1, content: "is all"  },
                    { rotation: "6deg", zIndex: 3, y:y2, content: "that matters.."  }
                ].map((card) => (
                    <Card_solo
                        key={card.zIndex}
                        y={card.y}
                        rotation={card.rotation}
                        zIndex={card.zIndex}
                        content={card.content}
                        // Staggered delay for each card
                    />
                ))}
            </div>
        </div>
    );
};

type CardProps = {
    y: MotionValue<string>;
    rotation: string;
    zIndex: number;
    content: string;
}

const Card_solo = ({ y, rotation, zIndex, content }: CardProps) => {
    return (
        <div className='w-full h-full absolute flex justify-center items-center'>
            <motion.div
                className={`w-72 h-96 border border-gray-500 rounded-2xl bg-black bg-opacity-65 ${zIndex === 1 && "z-50" } ${zIndex === 2 && "z-30" } ${zIndex === 3 && "z-10" } backdrop-blur-lg text-white flex items-center justify-center`}
                style={{
                    rotate: rotation,
                    y
                }}
                animate={{x:[-3, 3, -3]}}
                transition={{
                    duration: 3,
                    ease: easeInOut,
                    repeat: Infinity,
                    repeatType:"loop",
                    // delay: zIndex * 0
                    delay: zIndex * 0.5
                }}>
                <div className='text-xl font-light font-sans'>
                {content}
                </div>
            </motion.div>
        </div>
    );
};

export default Card;