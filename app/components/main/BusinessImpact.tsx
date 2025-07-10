import { Check } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            duration: 0.7,
            ease: easeOut
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }
};

const BusinessImpact = () => {
    return (
        <motion.section
            className="w-full h-[1200px] md:py-16 mx-auto md:mt-0 mt-16 flex flex-col items-center relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="w-full max-w-[1600px] h-full relative flex md:flex-row flex-col bg-no-repeat md:bg-[position:70%_70%]" style={{ backgroundImage: "url('/images/cs-pattern.png')" }}>
                <motion.div className="md:w-1/2 w-full md:h-full flex flex-col justify-start items-start" variants={itemVariants}>
                    <motion.h2
                        className="text-4xl sm:text-4xl md:text-6xl font-thin md:mb-12 mb-6 mt-4 text-pink-500 md:px-0 px-4 md:text-start text-center"
                        variants={itemVariants}
                    >
                        Consulting solutions to drive business impact
                    </motion.h2>
                    <motion.div className="w-full flex flex-col justify-center items-center md:gap-14 gap-12 md:pl-16 md:pt-24 pt-12 md:px-0 px-4" variants={containerVariants}>
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-start">Develop a clear vision and strategy</span>
                        </motion.div>
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-start">Enhance business performance with critical technologies and processes</span>
                        </motion.div>
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-start">Implement a plan or manage operations</span>
                        </motion.div>
                        <motion.div className="w-full flex justify-start items-center md:gap-20 gap-8 mt-16 md:flex-row flex-col" variants={itemVariants}>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="md:w-64 w-full px-6 h-22 rounded-3xl cursor-pointer text-lg font-medium bg-[#4747F3] text-white">Find your consulting solution</motion.button>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="md:w-52 w-full px-6 h-22 rounded-3xl cursor-pointer text-lg font-medium bg-[#4747F3] text-white">Learn more</motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="md:w-1/2 w-full md:h-full flex justify-center items-start py-4 md:px-0 px-4" variants={imageVariants}>
                    <Image src="/images/cs-banner.png" alt="CS-Banner" width={500} height={500} className="md:mr-10 md:mt-0 mt-12" />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default BusinessImpact;