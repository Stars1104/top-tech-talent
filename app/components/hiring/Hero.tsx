import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const HiringHero = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="w-full h-[950px] flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative items-center justify-start px-2 sm:px-4" style={{ backgroundImage: "url('/images/hiring-banner.png')" }}>
            <div className="w-full max-w-[900px] flex flex-col items-start px-4 sm:px-8 justify-center mt-32 sm:mt-40 z-10 md:mt-52">
                <motion.h1
                    className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-light text-start mb-6 sm:mb-8 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Discover your next hire
                </motion.h1>
                <motion.p
                    className="text-white text-base xs:text-lg sm:text-2xl font-normal text-start mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    Explore our talent network. Enter a job title to begin.
                </motion.p>
                <motion.div
                    className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10 sm:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    <div className="flex items-center w-full sm:w-[70%] bg-[#e6e6e6] rounded-full sm:px-6 py-3 shadow-md mb-3 sm:mb-0">
                        <Search className="text-gray-500 mr-3" size={22} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Job title"
                            className="bg-transparent outline-none w-full text-gray-700 text-base"
                        />
                    </div>
                    <button className="bg-[#e6e6e6] text-[#6b2eb7] font-medium px-6 sm:px-8 py-3 rounded-full shadow hover:bg-[#f3eaff] transition-all text-base sm:text-lg whitespace-nowrap w-full sm:w-auto">
                        Preview candidates
                    </button>
                </motion.div>
                <motion.div
                    className="flex flex-col items-start w-full mt-4 sm:mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                >
                    <p className="text-white text-base xs:text-lg sm:text-2xl font-normal text-start mb-6 sm:mb-10">Connect with one of our experienced recruiters.</p>
                    <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-12">
                        <button className="border border-[#6b2eb7] text-white font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#6b2eb7] hover:text-white transition-all text-base sm:text-lg mb-2 sm:mb-0 w-full sm:w-auto">
                            Preview candidates
                        </button>
                        <span className="text-white text-xs sm:text-sm mt-1 sm:mt-2">Need immediate help? Call <a href="tel:18554320924" className="text-[#00e0ff] underline ml-1">1.855.432.0924</a></span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HiringHero;