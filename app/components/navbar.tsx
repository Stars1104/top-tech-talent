import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface NavbarProps {
    bgColor?: string;
}

const Navbar = ({ bgColor }: NavbarProps) => {
    const [showSearch, setShowSearch] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSmallHeight, setIsSmallHeight] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchButtonRef = useRef<HTMLButtonElement>(null);
    const searchBoxRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Focus the input when shown
    useEffect(() => {
        if (showSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showSearch]);

    // Hide search bar when clicking outside
    useEffect(() => {
        if (!showSearch) return;
        function handleClick(e: MouseEvent) {
            if (
                searchBoxRef.current &&
                !searchBoxRef.current.contains(e.target as Node) &&
                searchButtonRef.current &&
                !searchButtonRef.current.contains(e.target as Node)
            ) {
                setShowSearch(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [showSearch]);

    // Hide mobile menu on route change or resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) setMobileMenuOpen(false);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check scroll position and update background color
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const shouldBeRed = scrollY > 100; // Change to red after scrolling 100px
            setIsSmallHeight(shouldBeRed);
        }

        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pageRouter = (route: string) => {
        if (route === "find-jobs") {
            router.push('/findjob');
        } else if (route === "hiring-talent") {
            router.push('/hiring');
        } else if (route === "explore-consulting-solutions") {
            router.push('/consulting');
        } else if (route === "discover-insights") {
            router.push('/insights');
        }
    }

    return (
        <nav className={`w-full flex justify-center fixed top-0 left-0 z-50 py-4 tranistion-all duration-300 ${isSmallHeight ? 'bg-[#3758F9]' : `${bgColor} backdrop-blur supports-backdrop-blur:bg-white/95`}`}>
            <div className="w-full max-w-[1600px] flex items-center justify-between px-4 md:px-8 h-14 md:h-28relative">
                {/* Logo as Text */}
                <Link href="/">
                    <Image src="/Logo.png" alt="Logo" width="70" height="30" className="md:w-[95px] w-[70px] cursor-pointer" />
                </Link>
                {/* Desktop Menu Items */}
                <div className="hidden lg:flex gap-8 items-center text-white font-medium">
                    <div className="flex items-center gap-1 cursor-pointer text-[16px] hover:text-pink-500 transition-all duration-300" onClick={() => pageRouter("find-jobs")}>Find Jobs <ChevronDown size={20} /></div>
                    <div className="flex items-center gap-1 cursor-pointer text-[16px] hover:text-pink-500 transition-all duration-300" onClick={() => pageRouter("hiring-talent")}>Hire Talent <ChevronDown size={20} /></div>
                    <div className="flex items-center gap-1 cursor-pointer text-[16px] hover:text-pink-500 transition-all duration-300" onClick={() => pageRouter("explore-consulting-solutions")}>Explore Consulting Solutions <ChevronDown size={20} /></div>
                    <div className="flex items-center gap-1 cursor-pointer text-[16px] hover:text-pink-500 transition-all duration-300" onClick={() => pageRouter("discover-insights")}>Discover Insights <ChevronDown size={20} /></div>
                </div>
                {/* Desktop Right Side: Search & Sign in */}
                <div className="hidden lg:flex items-center gap-4 relative">
                    <button
                        ref={searchButtonRef}
                        className="text-white text-xl focus:outline-none"
                        aria-label="Search"
                        onClick={() => setShowSearch((v) => !v)}
                    >
                        <Search />
                    </button>
                    {/* Animated Search Box */}
                    <div
                        ref={searchBoxRef}
                        className={`absolute right-[110px] top-1/2 -translate-y-1/2 transition-all duration-300 ${showSearch ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} flex items-center`}
                        style={{ minWidth: '220px' }}
                    >
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            className="w-48 md:w-64 px-4 py-2 rounded-full border border-[#4747F3] bg-white text-black focus:outline-none transition-all duration-300 shadow-lg"
                        />
                    </div>
                    <Link href="#" className="px-6 py-2 rounded-full border border-[#4747F3] text-white bg-transparent hover:bg-[#4747F3] hover:text-white transition-all duration-300 text-sm md:text-base">
                        Sign in
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <button className="lg:hidden text-white ml-2" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenuOpen((v) => !v)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Dropdown */}
            <div className={`lg:hidden fixed top-24 left-0 w-full ${isSmallHeight ? 'bg-pink-500' : 'bg-[#1a1333]'} z-40 transition-all duration-300 ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden shadow-lg`}>
                <div className="flex flex-col gap-2 py-4 px-6 text-white text-base font-medium">
                    <div className="flex items-center gap-1 py-2 cursor-pointer">Find Jobs <ChevronDown size={18} /></div>
                    <div className="flex items-center gap-1 py-2 cursor-pointer" onClick={() => pageRouter("hiring-talent")}>Hire Talent <ChevronDown size={18} /></div>
                    <div className="flex items-center gap-1 py-2 cursor-pointer">Explore Consulting Solutions <ChevronDown size={18} /></div>
                    <div className="flex items-center gap-1 py-2 cursor-pointer">Discover Insights <ChevronDown size={18} /></div>
                    <div className="flex items-center gap-2 py-2">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 rounded-full border border-[#4747F3] bg-white text-black focus:outline-none transition-all duration-300 shadow"
                        />
                    </div>
                    <Link href="#" className="w-full text-center px-4 py-2 rounded-full border border-[#4747F3] text-white bg-transparent hover:bg-[#4747F3] hover:text-white transition-colors text-base mt-2">
                        Sign in
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;