import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Anyone searching knows how hard it is to find a position that aligns with your goals. They connected me with the perfect job.",
        author: "Sales assistant",
    },
    {
        text: "Robert Half was able to get the person we needed to do the project in less than a week.",
        author: "Billing analyst",
    },
];

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Explore = () => {
    return (
        <div className="w-full min-h-[800px] flex flex-col relative md:justify-center items-center justify-start px-2 sm:px-4 py-8">
            <div className="w-full max-w-[1600px] flex flex-col gap-8 justify-center items-center">
                <motion.h2
                    className="text-pink-500 text-4xl md:text-5xl font-light text-center mb-12 mt-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                >
                    Explore testimonials
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mb-10">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#d3d9fd] rounded-[100px] px-8 py-4 flex-1 min-w-[280px] max-w-3xl flex items-center shadow-sm"
                            style={{ minHeight: 220 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 60 }}
                            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(211,217,253,0.4)" }}
                        >
                            <div className="flex flex-col gap-2">
                                <motion.p
                                    className="text-gray-800 text-base md:text-xl mb-2"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2 + i * 0.2, duration: 0.6, type: "spring", stiffness: 60 }}
                                >
                                    "{t.text}"
                                </motion.p>
                                <motion.p
                                    className="text-gray-700 text-sm md:text-lg mt-2"
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.3 + i * 0.2, duration: 0.6, type: "spring", stiffness: 60 }}
                                >
                                    - {t.author}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-2">
                    <span className="w-5 h-5 rounded-full bg-pink-500 inline-block cursor-pointer"></span>
                    <span className="w-5 h-5 rounded-full bg-pink-200 inline-block cursor-pointer"></span>
                </div>
            </div>
        </div>
    );
};

export default Explore;