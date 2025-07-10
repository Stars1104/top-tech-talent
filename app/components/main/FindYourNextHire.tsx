import { Check, Ticket } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const FindYourNextHire = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
                when: "beforeChildren",
                staggerChildren: 0.25,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
    };
    return (
        <motion.div
            className="w-full min-h-[1087px] flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-start items-center justify-start px-2 sm:px-4"
            style={{ backgroundImage: "url('/images/find-your-next-hire-bg.png')" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <Image src="/images/fynh-b.png" alt="Fyng-b" width={800} height={800} className="absolute bottom-4 w-[23%] right-36 lg:block hidden" />

            <div className="w-full max-w-[1600px] h-full items-start justify-center flex lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full flex justify-start items-start lg:h-full lg:pt-64 py-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: easeOut }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Image src="/images/fynh-banner.png" alt="banner" width={550} height={550} />
                    </motion.div>
                </div>
                <div className="lg:w-1/2 w-full lg:h-full lg:pt-56 pt-8 flex flex-col justify-start items-center">
                    <motion.h2
                        className="text-4xl lg:text-6xl font-thin text-center lg:mb-12 mb-6 mt-4 text-pink-500 lg:px-0 px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: easeOut }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Find Your Next Hire
                    </motion.h2>
                    <motion.div
                        className="w-full flex flex-col justify-center items-center gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-start">Preview recruiter-assessed and AI-matched candidates</span>
                        </motion.div>
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-start">Book a consultation with one of  our recruiters to discuss your hiring needs</span>
                        </motion.div>
                        <motion.div className="w-full flex justify-start items-center gap-8" variants={itemVariants}>
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-white text-2xl text-start">Get dedicated expert support at every step of the way</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default FindYourNextHire;