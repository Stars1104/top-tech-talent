import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion, easeOut } from "framer-motion";

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
};

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const shapeVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } },
};

const ConsultingExpertise = () => {
    return (
        <motion.section
            className="w-full md:h-[600px] h-auto md:bg-white bg-[#99abff] flex flex-col md:flex-row items-center justify-center py-16 md:py-24 px-4 md:px-12 md:mt-32 relative overflow-hidden bg-no-repeat"
            style={{ backgroundImage: "url('/images/expertise-bg.png')" }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
        >
            <div className="w-full max-w-[1600px] flex justify-between items-center md:flex-row flex-col-reverse md:gap-0 gap-8">
                {/* Left: Text Content */}
                <motion.div
                    className="flex-1 flex flex-col items-start justify-center max-w-xl z-10"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                        Get global consulting<br />expertise
                    </h2>
                    <p className="text-white text-base md:text-lg mb-8 font-normal max-w-lg">
                        Need help managing a workforce, solving complex challenges or transforming your business? Access deep consulting expertise from Protiviti that seamlessly blends with our talent network for a flexible, custom-built solution:
                    </p>
                    <motion.ul
                        className="mb-10 space-y-6"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <CheckCircle className="text-pink-500 w-7 h-7" />
                            <span className="text-black text-base md:text-lg font-medium">Achieve long-term, strategic transformation</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <CheckCircle className="text-pink-500 w-7 h-7" />
                            <span className="text-black text-base md:text-lg font-medium">Drive immediate business results</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <CheckCircle className="text-pink-500 w-7 h-7" />
                            <span className="text-black text-base md:text-lg font-medium">Run day-to-day operations with managed solutions</span>
                        </motion.li>
                    </motion.ul>
                    <motion.button
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-full shadow transition-all text-base whitespace-nowrap mt-2"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Learn more
                    </motion.button>
                </motion.div>
                {/* Right: Image */}
                <motion.div
                    className="flex-1 flex items-center justify-center mt-12 md:mt-0 md:ml-8 z-10"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false }}
                >
                    <div className="overflow-hidden rounded-[40px] shadow-lg max-w-md w-full flex items-center justify-center">
                        <Image
                            src="/images/expertise.png"
                            alt="Consulting expertise"
                            width={420}
                            height={340}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </motion.div>
                {/* Decorative shape (optional, for top-right curve) */}
                <motion.div
                    className="absolute top-0 right-0 w-[60vw] h-[200px] bg-[#bfc6fa] rounded-bl-[120px] -z-10 hidden md:block"
                    style={{ clipPath: 'ellipse(60vw 200px at 100% 0%)' }}
                    variants={shapeVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                />
            </div>
        </motion.section>
    );
};

export default ConsultingExpertise;