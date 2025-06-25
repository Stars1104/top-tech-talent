import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="mt-24">
            {/* Bottom Section: Blue navigation/footer */}
            <div className="bg-[#4747F3] text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Services Column */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Services</h3>
                            <ul className="space-y-4">
                                <li><Link href="/browse-jobs" className="hover:text-gray-300 transition">Browse Jobs</Link></li>
                                <li><Link href="/contract-talent" className="hover:text-gray-300 transition">Contract Talent</Link></li>
                                <li><Link href="/permanent-talent" className="hover:text-gray-300 transition">Permanent Talent</Link></li>
                                <li><Link href="/consulting-solutions" className="hover:text-gray-300 transition">Consulting Solutions</Link></li>
                            </ul>
                        </div>

                        {/* Areas of Expertise Column */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
                            <ul className="space-y-4">
                                <li><Link href="/finance-accounting" className="hover:text-gray-300 transition">Finance & Accounting</Link></li>
                                <li><Link href="/technology" className="hover:text-gray-300 transition">Technology</Link></li>
                                <li><Link href="/marketing-creative" className="hover:text-gray-300 transition">Marketing & Creative</Link></li>
                                <li><Link href="/administrative-support" className="hover:text-gray-300 transition">Administrative & Customer Support</Link></li>
                                <li><Link href="/legal" className="hover:text-gray-300 transition">Legal</Link></li>
                            </ul>
                        </div>

                        {/* Resources & Tools Column */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Resources & Tools</h3>
                            <ul className="space-y-4">
                                <li><Link href="/discover-insights" className="hover:text-gray-300 transition">Discover Insights</Link></li>
                                <li><Link href="/invoice" className="hover:text-gray-300 transition">Invoice</Link></li>
                                <li><Link href="/job-directory" className="hover:text-gray-300 transition">Job Directory</Link></li>
                                <li><Link href="/salary-guide" className="hover:text-gray-300 transition">Salary Guide</Link></li>
                                <li><Link href="/time-reports" className="hover:text-gray-300 transition">Time Reports</Link></li>
                                <li><Link href="/contact-us" className="hover:text-gray-300 transition">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* About Column */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">About</h3>
                            <ul className="space-y-4">
                                <li><Link href="/about-robert-half" className="hover:text-gray-300 transition">About Robert Half</Link></li>
                                <li><Link href="/leadership" className="hover:text-gray-300 transition">Leadership</Link></li>
                                <li><Link href="/careers-with-us" className="hover:text-gray-300 transition">Careers With Us</Link></li>
                                <li><Link href="/locations" className="hover:text-gray-300 transition">Locations</Link></li>
                                <li><Link href="/investor-center" className="hover:text-gray-300 transition">Investor Center</Link></li>
                                <li><Link href="/our-brands" className="hover:text-gray-300 transition">Our Brands</Link></li>
                                <li><Link href="/supplier-relations" className="hover:text-gray-300 transition">Supplier Relations</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Section: White background */}
            <div className="bg-white text-black border border-[#4747F3] border-b-0">
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Left: Logo and Socials */}
                    <div className="flex flex-col items-start gap-4">
                        <Image src="/Footer-Logo.png" alt="Toptech Talent Logo" width={120} height={60} />
                        <div className="flex gap-4 mt-2">
                            <a href="#" aria-label="Facebook" className="text-white p-2 rounded-full text-2xl hover:opacity-70 bg-[#4747F3]"><FaFacebookF /></a>
                            <a href="#" aria-label="X" className="text-white p-2 rounded-full text-2xl hover:opacity-70 bg-[#4747F3]"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram" className="text-white p-2 rounded-full text-2xl hover:opacity-70 bg-[#4747F3]"><FaInstagram /></a>
                            <a href="#" aria-label="YouTube" className="text-white p-2 rounded-full text-2xl hover:opacity-70 bg-[#4747F3]"><FaYoutube /></a>
                            <a href="#" aria-label="LinkedIn" className="text-white p-2 rounded-full text-2xl hover:opacity-70 bg-[#4747F3]"><FaLinkedinIn /></a>
                        </div>

                        {/* Center: Legal/Notice Links */}
                        <div className="flex-1 flex flex-col items-start gap-4 mt-20">
                            <div className="flex flex-wrap justify-center gap-3 text-lg font-medium mt-4 lg:mt-0">
                                <Link href="#" className="pr-4 border-r border-black last:border-r-0">Fraud Alert</Link>
                                <Link href="#" className="pr-4 border-r border-black last:border-r-0">Government Notice</Link>
                                <Link href="#" className="pr-4 border-r border-black last:border-r-0">Privacy Notice</Link>
                                <Link href="#" className="pr-4">Terms of Use</Link>
                            </div>
                            <div className="text-sm mt-2">© 2025 Toptech Talent</div>
                            <div className="flex items-center gap-2 text-sm mt-2">
                                <FaMapMarkerAlt className="text-base" />
                                <span>An Equal Opportunity Employer M/F/Disability/Veterans.</span>
                            </div>
                            <div className="text-sm mt-2 cursor-pointer">Cookies Settings</div>
                        </div>
                    </div>

                    {/* Right: Region/Language Selector */}
                    <div className="flex flex-col items-center w-full lg:w-auto mt-8 lg:mt-0">
                        <div className="font-bold text-lg mb-2 text-center">United States (English)</div>
                        <button className="border-4 border-[#4747F3] rounded-full px-8 py-4 text-base font-medium hover:bg-[#f3f3ff] transition text-black">
                            Select a region and language
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;