import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

const EasyWay = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    }
  };

  return (
    <motion.section 
      className="w-full py-20 bg-white flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-4"
        variants={itemVariants}
      >
        Thousands of jobs. Two easy ways<br className="hidden md:block" /> to find them.
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-center text-gray-700 mb-12 font-normal"
        variants={itemVariants}
      >
        Technology and experience on your side
      </motion.p>
      <motion.div 
        className="flex flex-col md:flex-row gap-12 md:gap-32 w-full max-w-4xl justify-center"
        variants={containerVariants}
      >
        {/* Upload Resume */}
        <motion.div 
          className="flex-1 min-w-[250px] max-w-xs"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Upload your resume</h2>
          <p className="text-gray-700 mb-4 text-base">
            Add your latest resume to match with open positions.
          </p>
          <motion.a
            href="#"
            className="text-[#3758F9] font-medium inline-flex items-center gap-1 hover:underline group"
            variants={linkVariants}
            whileHover="hover"
          >
            Upload resume
            <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>
        {/* Search Jobs */}
        <motion.div 
          className="flex-1 min-w-[250px] max-w-xs"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Search available jobs</h2>
          <p className="text-gray-700 mb-4 text-base">
            Choose from thousands of jobs (with new ones posted daily).
          </p>
          <motion.a
            href="#"
            className="text-[#3758F9] font-medium inline-flex items-center gap-1 hover:underline group"
            variants={linkVariants}
            whileHover="hover"
          >
            Search jobs
            <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EasyWay;