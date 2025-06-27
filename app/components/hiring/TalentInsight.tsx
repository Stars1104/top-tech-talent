import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const insights = [
    {
        type: "article",
        title: "May 2025 Jobs Report: Employers Add 139,000 Jobs",
        description: "The U.S. added 139,000 jobs, and the market held unemployment at 4%. Read more about the May 2025 jobs...",
        image: "/assets/business-person-futuristic-business-environment.png",
    },
    {
        type: "featured",
        title: "What jobs are in demand?",
    },
    {
        type: "article",
        title: "Trending Tech and IT Skills Reflect Talent Demands for Priority Projects",
        description: "How are tech leaders' priorities for 2025 impacting the demand for specific types of tech and IT expertise in the...",
        image: "/assets/person-using-ar-technology-perform-their-occupation.png",
    },
    {
        type: "tag",
        title: "2025 Salary Guide",
        posts: 0,
    },
    {
        type: "article",
        title: "Small Business Hiring: Attract Top Talent With Competitive",
        description: "Small business recruitment is tough, but smart strategies can tip the balance. Discover how to offer competitive...",
        image: "/assets/in1.png",
    },
    {
        type: "tag",
        title: "Management tips",
        posts: 314,
    },
    {
        type: "article",
        title: "Making Legal Technology Work: Skills, Specialists and Strategy",
        description: "Implementing legal tech solutions? Discover core skill sets and new roles for skilled legal talent management in...",
        image: "/assets/in2.png",
    },
    {
        type: "tag",
        title: "Hiring help",
        posts: 151,
    },
    {
        type: "article",
        title: "Remote Work Statistics and Trends for 2025",
        description: "What can job seekers and employers expect from 2025? How does remote work fit in? Read the latest trends for skilled talent...",
        image: "/assets/in3.png",
    },
    {
        type: "article",
        title: "How to Close the Skills Gap in Your Office Services Team",
        description: "Skills gaps in office services are growing fast. Learn how to upskill your team and sta...",
        image: "/assets/in4.png",
    },
    {
        type: "article",
        title: "Digital Transformation in Marketing Requires the Right Expertise",
        description: "Digital transformation in marketing requires talent and technology. Robert Half's Lucy Marino shares how to build...",
        image: "/assets/in5.png",
    },
    {
        type: "article",
        title: "How to Build a Tech Team That Can Deliver On Your Digital",
        description: "Behind every successful digital transformation project is a highly skilled and committed tech and IT team. Learn how...",
        image: "/assets/in6.png",
    },
];

const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const TalentInsight = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
            <h2 className="text-pink-500 text-4xl md:text-5xl font-light text-center mb-12 mt-4">
                Explore talent hiring insights
            </h2>
            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-0 mb-12">
                {/* First column */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={columnVariants}
                >
                    {[0, 4, 8].map((idx, i) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-3xl shadow-md p-4 flex flex-col h-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: easeOut }}
                        >
                            {insights[idx].image && (
                                <Image src={insights[idx].image} alt={insights[idx].title} width={320} height={180} className="rounded-2xl object-cover mb-4" />
                            )}
                            <h3 className="text-black text-base font-semibold mb-2">{insights[idx].title}</h3>
                            <p className="text-gray-600 text-sm">{insights[idx].description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Second column */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={columnVariants}
                >
                    <motion.div
                        className="bg-[#ff5b6a] text-white rounded-3xl shadow-md p-8 flex flex-col items-center justify-center h-full min-h-[180px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 0 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        <span className="uppercase text-xs font-bold mb-2">Featured</span>
                        <h3 className="text-xl font-semibold text-center">{insights[1].title}</h3>
                    </motion.div>
                    <motion.div
                        className="bg-[#ff5b6a] text-white rounded-3xl shadow-md p-8 flex flex-col items-center justify-center h-full min-h-[180px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 1 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        <span className="uppercase text-xs font-bold mb-2">Tag Results</span>
                        <h3 className="text-xl font-semibold text-center">{insights[5].title}</h3>
                        <span className="text-sm mt-2">{insights[5].posts} posts</span>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl shadow-md p-4 flex flex-col h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 2 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        {insights[9].image && (
                            <Image src={insights[9].image} alt={insights[9].title} width={320} height={180} className="rounded-2xl object-cover mb-4" />
                        )}
                        <h3 className="text-black text-base font-semibold mb-2">{insights[9].title}</h3>
                        <p className="text-gray-600 text-sm">{insights[9].description}</p>
                    </motion.div>
                </motion.div>
                {/* Third column */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={columnVariants}
                >
                    {[2, 6, 10].map((idx, i) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-3xl shadow-md p-4 flex flex-col h-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: easeOut }}
                        >
                            {insights[idx].image && (
                                <Image src={insights[idx].image} alt={insights[idx].title} width={320} height={180} className="rounded-2xl object-cover mb-4" />
                            )}
                            <h3 className="text-black text-base font-semibold mb-2">{insights[idx].title}</h3>
                            <p className="text-gray-600 text-sm">{insights[idx].description}</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Fourth column */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={columnVariants}
                >
                    <motion.div
                        className="bg-[#3d5afe] text-white rounded-3xl shadow-md p-8 flex flex-col items-center justify-center h-full min-h-[180px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 0 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        <span className="uppercase text-xs font-bold mb-2">Tag Results</span>
                        <h3 className="text-xl font-semibold text-center">{insights[3].title}</h3>
                    </motion.div>
                    <motion.div
                        className="bg-[#ff5b6a] text-white rounded-3xl shadow-md p-8 flex flex-col items-center justify-center h-full min-h-[180px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 1 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        <span className="uppercase text-xs font-bold mb-2">Tag Results</span>
                        <h3 className="text-xl font-semibold text-center">{insights[7].title}</h3>
                        <span className="text-sm mt-2">{insights[7].posts} posts</span>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-3xl shadow-md p-4 flex flex-col h-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={cardVariants}
                        transition={{ delay: 2 * 0.15, duration: 0.6, ease: easeOut }}
                    >
                        {insights[11].image && (
                            <Image src={insights[11].image} alt={insights[11].title} width={320} height={180} className="rounded-2xl object-cover mb-4" />
                        )}
                        <h3 className="text-black text-base font-semibold mb-2">{insights[11].title}</h3>
                        <p className="text-gray-600 text-sm">{insights[11].description}</p>
                    </motion.div>
                </motion.div>
            </div>
            <motion.button
                className="bg-[#3d5afe] hover:bg-[#2a3eb1] text-white font-medium px-8 py-3 rounded-full shadow transition-all text-base whitespace-nowrap mt-8"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Subscribe to updates
            </motion.button>
        </section>
    );
};

export default TalentInsight;