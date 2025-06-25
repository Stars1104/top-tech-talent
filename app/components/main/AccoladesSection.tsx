import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


const accolades = [
    {
        title: "Fortune® World's Most Admired Companies™",
        year: '2025',
    },
    {
        title: "Forbes' America's Best Professional Recruiting Firms",
        year: '2025',
    },
    {
        title: "Fortune® America's Most Innovative Companies",
        year: '2025',
    },
];

export default function AccoladesSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-start items-center justify-start px-2 sm:px-4"
        >
            <div className='w-full max-w-[1400px] flex flex-col gap-4 justify-center items-center'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                    className="text-[2.5rem] md:text-[3rem] font-light text-[#F23CA4] mb-12 text-center"
                >
                    You're in good company
                </motion.h2>
                {/* Accolades Row */}
                <div className="flex justify-center gap-24 w-full md:flex-row flex-col">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className='relative md:w-[33%] w-full flex justify-center items-center'
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.2, duration: 0.7, ease: 'easeOut' }}
                        >
                            <div className='w-[60%] flex flex-col text-xl h-64 justify-center gap-4'>
                                <span className='text-center'>{accolades[i].title}</span>
                                <span className='text-center'>{accolades[i].year}</span>
                            </div>
                            <Image src="/images/flower-print.png" alt='flower-print' width={800} height={500} className='w-full absolute top-0' />
                        </motion.div>
                    ))}
                </div>
                {/* See all accolades button */}
                <motion.button
                    whileHover={{ scale: 1.07, backgroundColor: '#3535d6' }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#4747F3] cursor-pointer mt-24 text-white text-[1.25rem] md:text-[1.35rem] font-normal rounded-full px-10 py-4 transition-colors"
                >
                    See all accolades
                </motion.button>
            </div>
        </motion.section>
    );
}
