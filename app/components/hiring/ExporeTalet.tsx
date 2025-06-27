import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        title: "Contract talent",
        description:
            "Add short- or long-term resources fast, tapping our large network of on-demand professionals.",
        link: "#",
    },
    {
        title: "Permanent talent",
        description:
            "Our recruitment specialists will zero in on the expertise you need to expand your team from our network of permanent candidates.",
        link: "#",
    },
    {
        title: "Executive search",
        description:
            "Let our consultants quickly pinpoint high-level professionals who can help lead your company forward.",
        link: "#",
    },
];

const ExporeTalent = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center py-20 bg-white">
            <motion.h2
                className="text-pink-500 text-4xl md:text-5xl font-light text-center mb-20 mt-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            >
                Explore our talent solutions
            </motion.h2>
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-stretch gap-12 px-4">
                {solutions.map((sol, i) => (
                    <motion.div
                        key={sol.title}
                        className="flex-1 flex flex-col items-start md:items-center text-left md:text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: i * 0.2, type: "spring", stiffness: 60 }}
                    >
                        <h3 className="text-blue-700 text-xl md:text-2xl font-bold mb-4">
                            {sol.title}
                        </h3>
                        <p className="text-black text-sm md:text-base mb-8 max-w-xs">
                            {sol.description}
                        </p>
                        <a
                            href={sol.link}
                            className="flex items-center gap-2 text-[#00a2d4] font-medium text-base hover:underline group"
                        >
                            Learn more
                            <ArrowRight className="w-5 h-5 text-[#00a2d4] group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExporeTalent;