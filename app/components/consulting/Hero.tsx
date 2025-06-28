import Image from "next/image";
import { motion } from "framer-motion";

const ConsultingHero = () => {
    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative items-center justify-center px-2 sm:px-4 py-4">
            {/* Left Section */}
            <div className="w-full max-w-[1300px] flex justify-between items-center md:flex-row flex-col-reverse md:mt-0 mt-12 z-10">
                <motion.div
                    className="flex flex-col justify-center items-start md:w-1/2 w-full lg:pl-12"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-light text-pink-500 mb-4 leading-tight">
                        World-class consulting from <br className="hidden sm:block" />Protiviti
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 mb-6">
                        Our subsidiary <a href="#" className="text-blue-500 underline">Protiviti</a> provides deep consulting expertise, objective insights and unparalleled collaboration that helps you confidently address challenges and opportunities across your organization. Protiviti draws on Robert Half's extensive network of contract talent to build delivery teams that can adapt to meet all of your business goals.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-medium shadow-lg transition mb-8 lg:mb-0 cursor-pointer">
                        Find your consulting solutions
                    </button>
                </motion.div>
                {/* Right Section */}
                <motion.div
                    className="md:w-1/2 w-full flex justify-center items-center relative mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img
                        src="/images/consulting-img.png"
                        alt="Consulting professionals"
                        className="relative z-10 rounded-2xl w-full max-w-md object-cover"
                    />
                </motion.div>
            </div>

            <Image src="/images/hr-bg.png" alt="Consulting-banner" width={1920} height={100} className="w-full h-3/4 absolute bottom-0" />
        </div>
    )
}

export default ConsultingHero;