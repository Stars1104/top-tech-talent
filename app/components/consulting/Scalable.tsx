import Image from "next/image";
import { motion } from "framer-motion";

const Scalable = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center min-h-[340px] py-8 px-2 md:px-8 bg-gradient-to-b from-[#fafafd] to-white gap-12">
            <div className="w-full flex max-w-[1400px] justify-center items-center md:flex-row flex-col md:gap-0 gap-8">
                <motion.div
                    className="md:w-1/2 w-full flex justify-start items-center md:px-20"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Image
                            src="/images/scalable-banner.png"
                            alt="Project team meeting"
                            width={400}
                            height={240}
                            priority
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 w-full flex flex-col items-start justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-thin text-pink-500 mb-4 leading-tight">
                        Flex and scale project<br className="hidden md:block" /> resources
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 max-w-xl">
                        You need customized project teams and resources that ebb and flow as your project dictates. Our flexible delivery model provides consulting expertise from beginning to end, and contract talent for key roles during project peaks.
                    </p>
                </motion.div>
            </div>
            <div className="w-full flex items-center justify-center max-w-[1400px] mt-8 px-2 md:flex-row flex-col-reverse md:gap-0 gap-12">
                <motion.div
                    className="md:w-[60%] w-full flex flex-col items-start md:px-20"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-thin text-pink-500 mb-6 leading-tight">
                        Unlock your full business potential
                    </h2>
                    <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
                        <ul className="flex-1 list-disc pl-5 space-y-3 text-[16px] text-black">
                            <li>Access advisory services from our industry experts</li>
                            <li>Leverage experts to implement critical new technologies and processes</li>
                            <li>Optimize business functions and operations through automation</li>
                        </ul>
                        <ul className="flex-1 list-disc pl-5 space-y-3 text-[16px] text-black">
                            <li>Leverage our expertise and managed solutions to run day-to-day operations</li>
                            <li>Build and expand your workforce</li>
                        </ul>
                    </div>
                    <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-medium shadow transition mb-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Find your consulting solutions
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-[40%] w-full flex justify-start items-center md:px-20"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Image
                            src="/images/scalable-banner2.png"
                            alt="Project team meeting"
                            width={450}
                            height={240}
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Scalable;