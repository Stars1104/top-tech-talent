import Image from "next/image";
import { motion } from "framer-motion";

const Strategy = () => {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-center items-center justify-start px-2 sm:px-4 bg-[#d0d8ff]">
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
                                src="/images/Strategy1.png"
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
                            Strategy and advisory
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-xl">
                            Our team of experts will help you establish your future state vision and define a roadmap to drive business capability maturity.
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
                            Process and technology implementation
                        </h2>
                        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
                            <p className="text-base md:text-lg text-gray-700 max-w-xl">
                                Implement new technologies and processes to quickly enhance your business performance.
                                Our change management experience, along with leading technology, process and specialized talent,
                                can help get the immediate value you need for your business.
                            </p>
                        </div>
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
                                src="/images/Strategy2.png"
                                alt="Project team meeting"
                                width={450}
                                height={240}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full min-h-screen flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-center items-center justify-start px-2 sm:px-4 bg-[#ffffff]">
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
                                src="/images/Process.png"
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
                            Optimized operations
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-xl">
                            Maximize efficiency of your operations, or let us manage day-to-day operations for you, so your team can stay focused on mission critical goals.
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
                            Build and expand your workforce
                        </h2>
                        <div className="w-full flex flex-col md:flex-row gap-8 mb-8">
                            <p className="text-base md:text-lg text-gray-700 max-w-xl">
                                Create a high-performing organization with our global network of specialized contract and consulting professionals. Or use our experts in workforce planning and optimization and employee experience to manage teams for you.
                            </p>
                        </div>
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
                                src="/images/Process2.png"
                                alt="Project team meeting"
                                width={450}
                                height={240}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Strategy;