import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" stroke="currentColor" className="text-pink-600 mx-auto">
        <circle cx="16" cy="16" r="12" strokeWidth="2" />
        <path d="M12 14a4 4 0 1 1 8 0c0 2-4 6-4 6s-4-4-4-6z" strokeWidth="2" />
        <circle cx="16" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Jobs for everyone",
    description:
      "Search thousands of opportunities to find the ones that fit your strengths and goals.",
    link: { href: "#", text: "Search jobs" },
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" stroke="currentColor" className="text-pink-600 mx-auto">
        <rect x="8" y="14" width="16" height="10" rx="5" strokeWidth="2" />
        <path d="M16 14v-4m0 0l-2 2m2-2l2 2" strokeWidth="2" />
      </svg>
    ),
    title: "Career growth",
    description:
      "Explore ways to keep your skills fresh, forge new paths or prepare for what's next.",
    link: { href: "#", text: "Grow your career" },
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" stroke="currentColor" className="text-pink-600 mx-auto">
        <rect x="8" y="12" width="16" height="8" rx="4" strokeWidth="2" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        <circle cx="20" cy="16" r="1.5" fill="currentColor" />
        <path d="M16 20v2" strokeWidth="2" />
      </svg>
    ),
    title: "Our process",
    description:
      "Learn how we work with you to make your job search easier.",
    link: { href: "#", text: "See how we work" },
  },
];

const JobCareer: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-thin text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Grow your career with us
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            className="flex-1 max-w-sm mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 + (idx * 0.2) // Staggered animation
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-2xl shadow-md mb-6 mx-auto"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-6">{feature.description}</p>
            <motion.a
              href={feature.link.href}
              className="text-teal-700 font-medium inline-flex items-center gap-1 hover:underline"
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {feature.link.text}
              <span aria-hidden="true" className="ml-1">→</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobCareer;