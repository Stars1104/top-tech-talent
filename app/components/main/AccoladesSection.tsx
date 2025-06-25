import Image from 'next/image';
import React from 'react';


const accolades = [
    {
        title: "Fortune® World's Most Admired Companies™",
        year: '2025',
    },
    {
        title: "Forbes' America's Best Professional Recruiting Firms",
        year: '2025',
    },
    {
        title: "Fortune® America's Most Innovative Companies",
        year: '2025',
    },
];

export default function AccoladesSection() {
    return (
        <section className="w-full flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-start items-center justify-start px-2 sm:px-4">
            <div className='w-full max-w-[1400px] flex flex-col gap-4 justify-center items-center'>
                <h2 className="text-[2.5rem] md:text-[3rem] font-light text-[#F23CA4] mb-12 text-center">You're in good company</h2>
                {/* Accolades Row */}
                <div className="flex justify-center gap-24 w-full md:flex-row flex-col">
                    <div className='relative md:w-[33%] w-full flex justify-center items-center'>
                        <div className='w-[60%] flex flex-col text-xl h-64 justify-center gap-4'>
                            <span className='text-center'>Fortune® World's Most Admired Companies™</span>
                            <span className='text-center'>2025</span>
                        </div>
                        <Image src="/images/flower-print.png" alt='flower-print' width={800} height={500} className='w-full absolute top-0' />
                    </div>
                    <div className='relative md:w-[33%] w-full flex justify-center items-center'>
                        <div className='w-[60%] flex flex-col text-xl h-64 justify-center gap-4'>
                            <span className='text-center'>Forbes' America's Best Professional Recruiting Firms</span>
                            <span className='text-center'>2025</span>
                        </div>
                        <Image src="/images/flower-print.png" alt='flower-print' width={800} height={500} className='w-full absolute top-0' />
                    </div>
                    <div className='relative md:w-[33%] w-full flex justify-center items-center'>
                        <div className='w-[60%] flex flex-col text-xl h-64 justify-center gap-4'>
                            <span className='text-center'>Fortune® America's Most Innovative Companies</span>
                            <span className='text-center'>2025</span>
                        </div>
                        <Image src="/images/flower-print.png" alt='flower-print' width={800} height={500} className='w-full absolute top-0' />
                    </div>
                </div>
                {/* See all accolades button */}
                <button className="bg-[#4747F3] cursor-pointer mt-24 text-white text-[1.25rem] md:text-[1.35rem] font-normal rounded-full px-10 py-4 transition-colors">See all accolades</button>
            </div>
        </section>
    );
}
