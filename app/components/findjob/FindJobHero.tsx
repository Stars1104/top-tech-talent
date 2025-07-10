import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { Check } from 'lucide-react';

const FindJobHero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeOut
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.8,
                ease: easeOut
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <motion.section 
            className="w-full bg-white py-16 flex flex-col md:flex-row items-center mt-24 justify-center gap-8 md:gap-0 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='w-full max-w-[1400px] flex justify-between items-center'>
                {/* Left Side */}
                <motion.div 
                    className="md:w-1/2 w-full px-6 md:px-16"
                    variants={itemVariants}
                >
                    <motion.h1 
                        className="text-5xl md:text-6xl font-thin text-gray-900 leading-tight mb-6"
                        variants={itemVariants}
                    >
                        Find a job that works for you
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-700 mb-4 font-normal"
                        variants={itemVariants}
                    >
                        At Robert Half, we specialize in Finance and Accounting, Administrative and Customer Support, Technology, Marketing and Creative, and Legal.
                    </motion.p>
                    <motion.ul 
                        className="mb-6"
                        variants={itemVariants}
                    >
                        {[
                            'Choose from thousands of jobs — fully remote, hybrid and on-site',
                            'Discover new and exclusive opportunities posted every day',
                            'Let our recruiters advocate for you with interested employers',
                        ].map((text, idx) => (
                            <motion.li 
                                key={idx} 
                                className="flex items-start gap-3 py-3"
                                variants={itemVariants}
                                custom={idx}
                            >
                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full">
                                    <Check className='text-[#E11D48]'/>
                                </span>
                                <span className="text-base md:text-lg text-gray-800">{text}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.button 
                        className="mt-2 px-8 py-4 bg-[#3758F9] text-white text-lg font-semibold rounded-full shadow-md transition cursor-pointer"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Get job matches
                    </motion.button>
                </motion.div>
                {/* Right Side */}
                <motion.div 
                    className="md:w-1/2 w-full flex items-start justify-center"
                    variants={imageVariants}
                >
                    {/* Image with soft shadow and rounded corners */}
                    <div className="z-20 overflow-hidden" style={{width: 500, height: 450}}>
                        <Image
                            src="/images/scalable-banner.png"
                            alt="Woman working on laptop"
                            width={320}
                            height={280}
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default FindJobHero;