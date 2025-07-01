import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="w-full min-h-[480px] flex flex-col md:flex-row items-center justify-center bg-white py-16 px-2 md:px-0 relative">
            {/* Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col items-start justify-center md:w-1/2 w-full max-w-md md:pl-24"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-black font-thin text-3xl md:text-4xl text-left mb-4 mt-2"
                >
                    Let's work together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-black text-base font-light mb-8 text-left"
                >
                    With more than 400 locations worldwide, we are ready to help you with all your consulting and talent needs.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-[#3563FF] cursor-pointer text-white px-8 py-3 rounded-full font-light text-sm hover:bg-[#274bb5] transition"
                >
                    Find your consulting solutions
                </motion.button>
            </motion.div>
            {/* Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="md:w-1/2 w-full flex items-center justify-center mt-10 md:mt-0"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image src="/images/contact.png" alt="Businesswoman" width={500} height={500} className="object-contain" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact; 