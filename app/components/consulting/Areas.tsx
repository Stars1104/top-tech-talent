import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
    "Technology",
    "Risk, Audit and Compliance",
    "Finance and Accounting",
    "Digital, Marketing and Customer Ex"
];

const AreasExpertise = () => {

    const [selected, setSelected] = useState(0);
    const mainRef = useRef(null);
    const inView = useInView(mainRef, { amount: 0.2 });

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative items-center justify-center px-2 sm:px-4 py-4">
            <Image src="/images/hr-bg.png" alt="Consulting-banner" width={1920} height={100} className="w-full h-3/4 absolute top-0 rotate-x-180" />
            <div ref={mainRef} className="w-full max-w-[1400px] relative bg-[#d4dbff] h-full items-center justify-start rounded-2xl md:rounded-[130px] flex flex-col p-4 sm:p-8 md:p-12 lg:p-16">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-thin text-center lg:mb-12 mb-4 sm:mb-6 mt-4 text-pink-500 lg:px-0 px-2 sm:px-4">Add specialized talent across your organization</h2>
                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between items-center px-1 sm:px-2 py-2 sm:py-4 relative overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 whitespace-nowrap lg:whitespace-normal" style={{ WebkitOverflowScrolling: 'touch' }}>
                        {categories.map((cat, idx) => (
                            <span
                                key={cat}
                                className={`text-base sm:text-lg md:text-2xl text-black cursor-pointer font-semibold relative px-2 py-2 sm:py-4`}
                                style={{ textShadow: '2px 2px 4px #ffb6e6' }}
                                onClick={() => setSelected(idx)}
                            >
                                {cat}
                                {selected === idx && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-1 bg-black rounded"
                                        style={{ width: '100%' }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-full relative py-6 sm:py-10 flex flex-col">
                    <motion.div
                        className="w-full lg:w-[80%] h-full flex flex-col justify-between z-10 md:gap-30"
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col gap-1 sm:gap-2"
                            >
                                <span className="text-base sm:text-lg md:text-2xl lg:text-3xl">Leverage our comprehensive approach to technology that includes software selection and implementation, automation, modernization and end-to-end transformation journeys.</span>
                            </motion.div>
                        </AnimatePresence>
                        <div className="w-[70%] flex flex-col gap-4 sm:gap-8 px-2 sm:px-4 mt-4">
                            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-start lg:mb-12 mb-4 sm:mb-6 mt-2 sm:mt-4 text-pink-500 lg:px-0 px-2 sm:px-4">Trending job titles</h2>
                            <motion.div
                                className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.08 } },
                                }}
                            >
                                {[
                                    "Cloud",
                                    "Cybersecurity",
                                    "Data and analytics",
                                    "IT service desk",
                                    "Intelligent automation",
                                    "Data privacy"
                                ].map((title, i) => (
                                    <motion.span
                                        key={title}
                                        className="text-[#00a2d4] underline text-base sm:text-xl md:text-3xl cursor-pointer"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                        }}
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            className="w-full flex justify-start items-center px-2 sm:px-4 mt-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-base sm:text-lg md:text-2xl text-[#00a2d4] underline">Learn more</span>
                            <ArrowRight className="text-[#00a2d4] w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 cursor-pointer mt-2" />
                        </motion.div>
                    </motion.div>
                    <Image src='/images/Group-24.png' alt="Group" width={650} height={200} className="absolute right-0 bottom-0 hidden lg:block" />
                </div>
            </div>
        </div>
    )
}

export default AreasExpertise;