import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const stories = [
    {
        title: 'e-Learning platform',
        description: 'A leadership training company developed a next-generation e-learning platform to reduce costs and improve user experience.',
        link: '#',
        image: '/images/explore1.png',
    },
    {
        title: 'FP&A process automation',
        description: 'A nationwide eyecare chain integrated cloud analytics for a more efficient and collaborative financial planning cycle.',
        link: '#',
        image: '/images/explore2.png',
    },
    {
        title: 'Optimized internal audit',
        description: 'A healthcare system and a single-source consulting firm collaborated to build a world-class internal audit function.',
        link: '#',
        image: '/images/explore3.png',
    },
    {
        title: 'Automated audit control',
        description: 'A technology solutions company created an ROI-based approach to automate audit controls and processes.',
        link: '#',
        image: '/images/explore4.png',
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    }
};

const progressVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    }
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeOut
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2
        }
    },
    tap: {
        scale: 0.95
    }
};

const Exploresuccess = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const slidesCount = stories.length;
    // Calculate progress as a percentage
    const progressPercent = ((activeIndex + 1) / slidesCount) * 100;

    return (
        <motion.section
            className="w-full flex flex-col items-center justify-center py-16 px-2 md:px-0 bg-[#FFBCDE] min-h-[480px] relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                className="text-white font-montserrat text-3xl md:text-4xl font-light text-center mb-12 mt-2"
                variants={titleVariants}
            >
                Explore success stories
            </motion.h2>

            <motion.div
                className="w-full max-w-7xl relative"
                variants={containerVariants}
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    navigation={false}
                    pagination={{ clickable: true }}
                    className="relative"
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {stories.map((story, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                className="flex flex-col items-center rounded-2xl pt-6 mx-2 min-h-[320px] h-full"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="w-full flex justify-center mb-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        width={220}
                                        height={170}
                                        className="rounded-2xl w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.a
                                    href={story.link}
                                    className="text-blue-600 underline font-medium text-base mb-1 text-left w-full hover:text-blue-800 transition"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {story.title}
                                </motion.a>
                                <p className="text-xs text-black text-left w-full leading-snug">{story.description}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Progress bar and navigation in a single row */}
                <motion.div
                    className="w-full flex items-center mt-8 gap-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex-1 h-[4px] bg-gray-300 relative overflow-hidden"
                        variants={progressVariants}
                    >
                        <motion.div
                            className="h-full bg-black"
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </motion.div>

                    <motion.button
                        className="w-12 h-12 cursor-pointer rounded-full border-2 border-gray-500 flex items-center justify-center bg-transparent text-gray-700 hover:bg-pink-100 transition shadow-none mr-1"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="Previous"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                        className="w-12 h-12 cursor-pointer rounded-full border-2 border-black flex items-center justify-center bg-transparent text-black hover:bg-pink-100 transition shadow-none"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="Next"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>

                {/* Hide Swiper pagination dots */}
                <style jsx global>{`
          .swiper-pagination {
            display: none !important;
          }
        `}</style>
            </motion.div>
        </motion.section>
    );
};

export default Exploresuccess;