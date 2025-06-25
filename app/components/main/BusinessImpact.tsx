import { Check } from "lucide-react";
import Image from "next/image";

const BusinessImpact = () => {
    return (
        <section className="w-full h-[1200px] md:py-16 mx-auto md:mt-0 mt-16 flex flex-col items-center relative z-10">
            <div className="w-full max-w-[1600px] h-full relative flex md:flex-row flex-col bg-no-repeat md:bg-[position:70%_70%]" style={{ backgroundImage: "url('/images/cs-pattern.png')" }}>
                <div className="md:w-1/2 w-full md:h-full flex flex-col justify-start items-start">
                    <h2 className="text-4xl sm:text-4xl md:text-6xl font-thin md:mb-12 mb-6 mt-4 text-pink-500 md:px-0 px-4 md:text-start text-center">Consulting solutions to drive business impact</h2>
                    <div className="w-full flex flex-col justify-center items-center md:gap-30 gap-12 md:pl-16 md:pt-24 pt-12 md:px-0 px-4">
                        <div className="w-full flex justify-start items-center gap-8">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-center">Develop a clear vision and strategy</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-2">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-center">Enhance business performance with critical technologies and processes</span>
                        </div>
                        <div className="w-full flex justify-start items-center gap-8">
                            <div className="flex justify-center items-center bg-[#4747F3] p-1 rounded-full text-white">
                                <Check />
                            </div>
                            <span className="text-black text-2xl text-center">Implement a plan or manage operations</span>
                        </div>
                        <div className="w-full flex justify-start items-center md:gap-20 gap-8 mt-16 md:flex-row flex-col">
                            <button className="md:w-64 w-full px-6 h-22 rounded-3xl cursor-pointer text-lg font-medium bg-[#4747F3] text-white">Find your consulting solution</button>
                            <button className="md:w-52 w-full px-6 h-22 rounded-3xl cursor-pointer text-lg font-medium bg-[#4747F3] text-white">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:h-full flex justify-center items-start py-4 md:px-0 px-4">
                    <Image src="/images/cs-banner.png" alt="CS-Banner" width={500} height={500} className="md:mr-10 md:mt-0 mt-12" />
                </div>
            </div>
        </section>
    )
}

export default BusinessImpact;