import { Phone } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, easeOut, useInView } from "framer-motion";

const MAX_DETAILS_LENGTH = 4000;

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, when: "beforeChildren", staggerChildren: 0.12 } },
};

const fieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const BusinessChallengeForm = () => {
    const [details, setDetails] = useState("");
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2 });

    return (
        <div className="flex flex-col gap-12 mt-24" ref={ref}>
            <motion.h2
                className="text-2xl sm:text-5xl font-light text-pink-500 text-center mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, ease: easeOut }}
            >
                Tell us about your business challenge
            </motion.h2>
            <motion.div
                className="max-w-xl mx-auto bg-gray-200 rounded-2xl p-8 mt-8 mb-8 shadow-lg"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="hidden"
            >
                <motion.h2
                    className="text-2xl sm:text-3xl font-light text-pink-500 text-center mb-2"
                    variants={fieldVariants}
                >
                    Get in touch with a consulting<br />solutions professional
                </motion.h2>
                <motion.div className="flex justify-center mb-4" variants={fieldVariants}>
                    <a href="tel:18554320924" className="flex items-center text-[#00A2D4] text-lg font-medium underline gap-2">
                        <Phone />
                        1.855.432.0924
                    </a>
                </motion.div>
                <motion.form className="space-y-6" variants={fieldVariants}>
                    <motion.div variants={fieldVariants}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Describe your needs</label>
                        <div className="flex flex-col sm:flex-row gap-3 mb-3">
                            <motion.select className="flex-1 rounded-md border border-gray-300 p-2 outline-none" defaultValue="" variants={fieldVariants}>
                                <option value="" disabled>Business Area</option>
                                <option>IT Consulting</option>
                                <option>Strategy</option>
                                <option>Operations</option>
                                <option>Other</option>
                            </motion.select>
                            <motion.input type="text" className="flex-1 rounded-md border border-gray-300 p-2 outline-none" placeholder="Zip Code" variants={fieldVariants} />
                        </div>
                        <div className="relative">
                            <motion.textarea
                                className="w-full rounded-md border border-gray-300 p-2 min-h-[100px] outline-none"
                                maxLength={MAX_DETAILS_LENGTH}
                                placeholder="Project Details"
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                                variants={fieldVariants}
                            />
                            <div className="absolute bottom-2 right-3 text-xs text-gray-400">{details.length}/{MAX_DETAILS_LENGTH}</div>
                        </div>
                    </motion.div>
                    <motion.div variants={fieldVariants}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                            <motion.input type="text" className="rounded-md border border-gray-300 outline-none p-2" placeholder="First Name" variants={fieldVariants} />
                            <motion.input type="text" className="rounded-md border border-gray-300 outline-none p-2" placeholder="Last Name" variants={fieldVariants} />
                            <motion.input type="text" className="rounded-md border border-gray-300 outline-none p-2" placeholder="Company Name" variants={fieldVariants} />
                            <motion.select className="rounded-md border border-gray-300 p-2 outline-none" defaultValue="" variants={fieldVariants}>
                                <option value="" disabled>Company Size</option>
                                <option>1-10</option>
                                <option>11-50</option>
                                <option>51-200</option>
                                <option>201-500</option>
                                <option>500+</option>
                            </motion.select>
                            <motion.input type="text" className="rounded-md border border-gray-300 outline-none p-2" placeholder="Your Job Title" variants={fieldVariants} />
                            <motion.input type="email" className="rounded-md border border-gray-300 outline-none p-2" placeholder="Work Email" variants={fieldVariants} />
                            <motion.input type="text" className="rounded-md border border-gray-300 outline-none p-2 col-span-1 sm:col-span-2" placeholder="Business Phone" variants={fieldVariants} />
                        </div>
                    </motion.div>
                    <motion.button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 font-medium text-lg transition" variants={fieldVariants}>
                        Submit
                    </motion.button>
                    <motion.p className="text-xs text-gray-600 text-center mt-2" variants={fieldVariants}>
                        This site is protected by reCAPTCHA. The Google <a href="https://policies.google.com/privacy" className="text-blue-500 underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-blue-500 underline">Terms of Service</a> apply.
                    </motion.p>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default BusinessChallengeForm;
