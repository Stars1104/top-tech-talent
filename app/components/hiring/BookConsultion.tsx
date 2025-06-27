import Image from "next/image";
import { motion } from "framer-motion";
import { Network, Timer, Users } from "lucide-react";

const BookConsultion = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <section className="w-full h-[900px] flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-12 bg-white" style={{ backgroundImage: "url('/images/open-talent.png')" }} >
                <div className="w-full max-w-[1400px] flex justify-between items-center md:flex-row flex-col">
                    <motion.div
                        className="flex justify-center items-center mb-10 md:mb-0"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: false }}
                    >
                        <div className="overflow-hidden rounded-[40px] max-w-[560px] w-full flex items-center justify-center">
                            <Image
                                src="/images/Group-27.png"
                                alt="Get talent that gets the job done"
                                width={560}
                                height={560}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-start md:items-start justify-center max-w-xl md:pl-16"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-pink-500 text-4xl sm:text-4xl md:text-5xl font-thin mb-8">
                            Get talent that gets the job done
                        </h2>
                        <p className="text-black text-base md:text-lg mb-6 font-normal">
                            We back every professional we place*. But if for any reason you'd like to try a different candidate, we're happy to accommodate you – free of charge.
                        </p>
                        <p className="text-black text-sm mb-8 italic">
                            *Contact your local office for more details.
                        </p>
                        <button
                            className="bg-[#3d5afe] hover:bg-[#2a3eb1] text-white font-medium px-8 py-3 rounded-full shadow transition-all text-base whitespace-nowrap mt-2"
                        >
                            Book consultation
                        </button>
                    </motion.div>
                </div>
                {/* Features Section */}
            </section>
            <motion.div
                className="w-full max-w-[1400px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:px-0 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {/* Feature 1 */}
                <motion.div
                    className="flex flex-col items-start text-start"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                    whileHover={{ scale: 1.04 }}
                >
                    <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#a3a8f7] rounded-2xl flex items-center justify-center"></div>
                        <div className="absolute left-4 top-4 w-12 h-12 bg-[#f3f3f3] rounded-xl flex items-center justify-center shadow">
                            <Users />
                        </div>
                    </div>
                    <h3 className="text-pink-500 font-semibold text-lg mb-2">Scale teams with ease</h3>
                    <p className="text-black text-base">Let us help you quickly scale your teams up or down so you can complete projects on time — and on budget.</p>
                </motion.div>
                {/* Feature 2 */}
                <motion.div
                    className="flex flex-col items-start text-start"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                    whileHover={{ scale: 1.04 }}
                >
                    <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#a3a8f7] rounded-2xl flex items-center justify-center"></div>
                        <div className="absolute left-4 top-4 w-12 h-12 bg-[#f3f3f3] rounded-xl flex items-center justify-center shadow">
                            <Timer />
                        </div>
                    </div>
                    <h3 className="text-pink-500 font-semibold text-lg mb-2">Find talent matched to your needs</h3>
                    <p className="text-black text-base">Our AI-matching tech – powered by on-the-job success data – instantly identifies the best available candidates for your positions.</p>
                </motion.div>
                {/* Feature 3 */}
                <motion.div
                    className="flex flex-col items-start text-start"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                    whileHover={{ scale: 1.04 }}
                >
                    <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#a3a8f7] rounded-2xl flex items-center justify-center"></div>
                        <div className="absolute left-4 top-4 w-12 h-12 bg-[#f3f3f3] rounded-xl flex items-center justify-center shadow">
                            <Network />
                        </div>
                    </div>
                    <h3 className="text-pink-500 font-semibold text-lg mb-2">Get dedicated, personalized support</h3>
                    <p className="text-black text-base">With deep insight into your market, we'll get to know your goals and work with you step-by-step to help you meet them.</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default BookConsultion;