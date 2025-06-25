import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Career = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:h-[800px] h-[1000px] lg:px-0 px-4 py-8 lg:py-16 mx-auto lg:mt-0 mt-16 flex flex-col items-center relative z-10"
            style={{ backgroundImage: "url('/images/Career.png')" }}
        >
            <div className="w-full max-w-[1600px] h-full relative flex lg:flex-row justify-center flex-col-reverse lg:gap-0 gap-12">
                <motion.div
                    className='lgw-1/2 w-full flex justify-center items-center relative'
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image src="/images/mtc-banner.png" alt="MTC-Banner" width={500} height={500} />
                    {/* <Image src="/images/career-effect.png" alt="Career-Effect" width={440} height={240} className="absolute top-16 right-16" /> */}
                </motion.div>
                <motion.div
                    className="lgw-1/2 w-full flex flex-col justify-center items-center"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-4xl sm:text-4xl lg:text-6xl font-thin lg:mb-20 mb-6 mt-4 text-pink-500 lg:px-0 px-4 lg:text-start text-center">Make the career move you want</h2>
                    <motion.div
                        className="w-full flex flex-col lg:gap-8 gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.18
                                }
                            }
                        }}
                    >
                        {[
                            "Get instant job recommendations tailored to your skills and goals",
                            "Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent",
                            "Access competitive pay, benefits, and free online training and development"
                        ].map((text, idx) => (
                            <motion.div
                                key={idx}
                                className="w-full flex justify-start items-center lg:gap-14 gap-4"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                    <Check />
                                </div>
                                <span className="text-black lg:text-2xl text-lg text-center">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Career;