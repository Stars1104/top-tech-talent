const Hero = () => {
    return (
        <div className="w-full min-h-[1087px] flex flex-col bg-no-repeat bg-[95%_center] lg:bg-center bg-cover relative md:justify-center items-center justify-start px-2 sm:px-4" style={{ backgroundImage: "url('/images/background.png')" }}>
            <div className="absolute inset-0 bg-black/60 md:bg-black/40 lg:bg-transparent pointer-events-none z-0 transition-colors duration-300" />
            <div className="w-full max-w-[1600px] h-full px-2 sm:px-4 md:mt-12 mt-52">
                <div className="relative z-10 flex flex-col justify-center md:items-start  h-full w-full max-w-full xl:max-w-[70%] text-white">
                    <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-[80px] lg:text-[85px] font-extrabold mb-12 leading-tight">
                        <span className="text-white font-montserrat">Top Tech Talent</span>
                    </h1>
                    <p className="text-lg sm:text-2xl md:text-4xl mb-14 sm:mb-30">is a Women-Owned New Jersey-based<br className="hidden sm:block" />Technology Recruitment firm.</p>
                    <p className="text-sm sm:text-base md:text-2xl mb-16 sm:mb-20 max-w-full sm:max-w-xl text-white/90">
                        We deliver engineering talent that's not only highly skilled, but also deeply experienced and niche-specialized — perfect for scaling innovation-driven teams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                        <button className="bg-white text-blue-700 font-semibold px-8 sm:px-14 py-4 sm:py-8 cursor-pointer rounded-full shadow hover:bg-blue-100 transition-all text-lg sm:text-2xl w-full sm:w-auto">
                            Find a job
                        </button>
                        <button className="border-2 border-[#4747F3] text-white font-semibold cursor-pointer px-8 sm:px-14 py-4 sm:py-8 rounded-full hover:bg-[#4747F3] hover:text-white transition-all text-lg sm:text-2xl w-full sm:w-auto">
                            Find Talent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;