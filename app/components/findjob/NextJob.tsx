'use client'
import React from "react";
import { motion } from "framer-motion";

export default function NextJob() {
  return (
    <div className="w-full max-w-[1400px] mx-auto relative flex flex-col items-center justify-center py-16 bg-white">
      {/* Decorative Images */}
      <motion.div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 z-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/mtc-banner.png"
          alt="Person with phone"
          className="w-60 h-60"
        />
      </motion.div>
      <motion.div 
        className="absolute right-0 top-10 transform translate-x-1/3 z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/images/expertise.png"
          alt="Person with phone"
          className="w-60 h-60"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <motion.h1 
          className="text-5xl font-thin text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Find your next job
        </motion.h1>
        <motion.form 
          className="flex flex-col items-center w-full gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <motion.div 
            className="flex flex-col sm:flex-row w-full gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
          >
            {/* Job Title Input */}
            <motion.div 
              className="flex items-center bg-gray-100 rounded-xl px-5 py-4 flex-1 min-w-0"
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
              <input
                type="text"
                placeholder="Job Title, Skills, or Keywords"
                className="bg-transparent outline-none w-full text-lg text-gray-700 placeholder-gray-500"
              />
            </motion.div>
            {/* Location Input */}
            <motion.div 
              className="flex items-center bg-gray-100 rounded-xl px-5 py-4 flex-1 min-w-0"
              whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="City, State, or Zip Code"
                className="bg-transparent outline-none w-full text-lg text-gray-700 placeholder-gray-500"
              />
            </motion.div>
          </motion.div>
          <motion.button
            type="submit"
            className="mt-4 px-10 py-4 rounded-full bg-[#3758F9] text-white text-lg font-semibold shadow-lg transition-all cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 25px rgba(55, 88, 249, 0.3)",
              backgroundColor: "#2d4fd8"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Search jobs
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
