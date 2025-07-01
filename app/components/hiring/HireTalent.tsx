import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const slides = [
    {
        title: 'Know how much to pay',
        description: 'Attract and retain talent with our Salary Guide.',
        link: { text: 'Search Salaries', url: '#' },
        image: '/assets/business-person-futuristic-business-environment.png',
        imageBg: 'bg-[#e6e6e6]',
        imageFrame: 'bg-[#f8e6f6]',
    },
    {
        title: 'Onboard talent fast',
        description: 'Got a fire to put out? We can help you onboard talent quickly.',
        link: { text: 'Hire contract talent', url: '#' },
        image: '/assets/hiring-banner.png',
        imageBg: 'bg-[#e6e6e6]',
        imageFrame: 'bg-[#e6f6fa]',
    },
    // Add more slides as needed
];

interface HireTalentProps {
    title?: string
}

const HireTalent = ({ title }: HireTalentProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full flex flex-col items-center justify-center py-16 bg-white"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className="text-pink-500 text-4xl md:text-5xl font-light text-center mb-12 mt-4"
            >
                {title}
            </motion.h2>
            <div className="w-full max-w-5xl px-2 md:px-0 relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={32}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    }}
                    pagination={{ clickable: true }}
                    className="relative"
                    breakpoints={{
                        768: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 1.5 },
                    }}
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                                className="bg-[#ededed] rounded-3xl flex flex-row items-center p-8 gap-8 min-h-[220px] shadow-md relative"
                            >
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-2xl font-light mb-2 text-black">{slide.title}</h3>
                                    <p className="text-base text-black mb-4">{slide.description}</p>
                                    <a
                                        href={slide.link.url}
                                        className="text-[#00a2d4] font-medium text-sm flex items-center gap-1 hover:underline"
                                    >
                                        {slide.link.text} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                                <div className="flex-shrink-0 flex items-center justify-center">
                                    <div className={`rounded-3xl p-2 ${slide.imageFrame} relative`}>
                                        <div className={`rounded-2xl p-2 sm:block hidden ${slide.imageBg} relative`}>
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                width={120}
                                                height={120}
                                                className="rounded-xl object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Navigation Buttons at bottom right */}
                <div className="absolute flex items-center md:justify-end justify-center gap-4 md:right-0 left-1/2 md:translate-x-0 -translate-x-1/2 -bottom-16 z-10">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="swiper-prev w-12 h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition shadow-md ml-2"
                    >
                        <ArrowLeft className="w-7 h-7" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="swiper-next w-12 h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-400 hover:bg-pink-50 transition shadow-md"
                    >
                        <ArrowRight className="w-7 h-7" />
                    </motion.button>
                </div>
                {/* Pagination Dots Styling */}
                <style jsx global>{`
                    .swiper-pagination {
                        position: static !important;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 2.5rem;
                        margin-top: 2.5rem;
                        margin-bottom: 0;
                    }
                    .swiper-pagination-bullet {
                        background: #f8bbd0;
                        opacity: 1;
                        width: 140px;
                        height: 4px;
                        border-radius: 4px;
                        margin: 0 !important;
                        transition: background 0.3s;
                        box-shadow: none;
                    }
                    .swiper-pagination-bullet-active {
                        background: #ec4899;
                    }
        `}</style>
            </div>
        </motion.section>
    );
};

export default HireTalent;