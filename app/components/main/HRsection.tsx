import Image from "next/image";

const HRSection = () => {
    return (
        <section className="w-full min-h-[1200px] md:py-16 mx-auto md:mt-0 mt-16 h-full flex flex-col items-center relative z-10">
            <div className="w-full max-w-[1600px] h-full relative">
                <h2 className="text-[27px] sm:text-4xl md:text-5xl font-thin text-center md:mb-12 mb-6 mt-4 text-pink-500 md:px-0 px-4">Hiring trends and insights</h2>
                <div className="w-full flex justify-center items-center gap-8 md:gap-6 lg:gap-12 xl:gap-24 mt-32 lg:flex-nowrap flex-wrap md:px-0 px-4">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center md:w-1/4 h-[500px]">
                        <div className="w-full mb-15 overflow-hidden rounded-4xl">
                            <Image src="/assets/hr1.png" alt="2025 Salary Guide" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-xl lg:text-4xl md:text-3x sm:text-2xl font-medium text-blue-700 text-center mb-8">2025 Salary Guide</h3>
                        <p className="text-xl text-black font-medium text-center">Explore the latest data for 450-plus positions and know what you should earn or pay in local and national markets.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col items-center md:w-1/4 h-[500px]">
                        <div className="w-full mb-12 overflow-hidden rounded-4xl">
                            <Image src="/assets/hr2.png" alt="2025 Salary Guide" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-xl lg:text-4xl md:text-3x sm:text-2xl font-medium text-blue-700 text-center mb-8">What jobs are in demand?</h3>
                        <p className="text-xl text-black font-medium text-center">Check out our Demand for Skilled Talent report to learn about employers' hiring plans and needs.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col items-center md:w-1/4 h-[500px]">
                        <div className="w-full mb-12 overflow-hidden rounded-4xl">
                            <Image src="/assets/hr3.png" alt="2025 Salary Guide" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-xl lg:text-4xl md:text-3x sm:text-2xl font-medium text-blue-700 text-center mb-8">Navigate tech skills gaps</h3>
                        <p className="text-xl text-black font-medium text-center">Discover strategies for building a comprehensive tech team to support business priorities.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-col items-center md:w-1/4 h-[500px]">
                        <div className="w-full mb-6 overflow-hidden rounded-4xl">
                            <Image src="/assets/hr4.png" alt="2025 Salary Guide" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <h3 className="text-xl lg:text-4xl md:text-3x sm:text-2xl font-medium text-blue-700 text-center mb-8">Multigenerational Workforce Report</h3>
                        <p className="text-xl text-black font-medium text-center">Learn how to better recruit, motivate and retain today's professionals at every age and stage of their careers.</p>
                    </div>
                </div>
            </div>
            <Image src="/images/hr-bg.png" alt="Hr-bg" width={1920} height={600} className="absolute bottom-0 w-full h-[85%] -z-10 lg:block hidden" />
        </section>
    );
}

export default HRSection;